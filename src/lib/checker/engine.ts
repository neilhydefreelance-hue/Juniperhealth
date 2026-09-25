/**
 * Runs a self-check in the browser.
 *
 * The questions are already on the page as a normal form. This script turns
 * them into one question per screen, works out the result, and never sends
 * anything anywhere. Answers are only kept on the device if the person
 * presses "Save my answers on this device".
 */
import type { Answers, ResultView, Scorer } from './types';

interface SavedState {
  version: 1;
  answers: Record<string, string[]>;
  stepIndex: number;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

function storage(): Storage | null {
  try {
    const s = window.localStorage;
    const k = '__jh_test__';
    s.setItem(k, '1');
    s.removeItem(k);
    return s;
  } catch {
    return null;
  }
}

export function initChecker(id: string, score: Scorer): void {
  const root = document.querySelector<HTMLElement>(`[data-checker="${id}"]`);
  if (!root) return;
  document.documentElement.classList.add('js');

  const saveKey = `juniper-checker-${id}`;
  const store = storage();
  const intro = root.querySelector<HTMLElement>('[data-intro]')!;
  const form = root.querySelector<HTMLFormElement>('form')!;
  const steps = Array.from(form.querySelectorAll<HTMLFieldSetElement>('.step'));
  const progress = root.querySelector<HTMLElement>('[data-progress]')!;
  const progressText = root.querySelector<HTMLElement>('[data-progress-text]')!;
  const progressBar = root.querySelector<HTMLElement>('[data-progress-bar]')!;
  const nav = root.querySelector<HTMLElement>('[data-nav]')!;
  const back = root.querySelector<HTMLButtonElement>('[data-back]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-next]')!;
  const error = root.querySelector<HTMLElement>('[data-error]')!;
  const resultBox = root.querySelector<HTMLElement>('[data-result]')!;
  const resumeBox = root.querySelector<HTMLElement>('[data-resume]');
  let current = -1;

  const stepAnswers = (fs: HTMLFieldSetElement) =>
    Array.from(fs.querySelectorAll<HTMLInputElement>('input:checked')).map((i) => i.value);

  const allValues = (): Record<string, string[]> => {
    const out: Record<string, string[]> = {};
    for (const fs of steps) out[fs.dataset.step!] = stepAnswers(fs);
    return out;
  };

  const isVisible = (fs: HTMLFieldSetElement): boolean => {
    const rule = fs.dataset.showIf;
    if (!rule) return true;
    const cond = JSON.parse(rule) as Record<string, string[]>;
    const vals = allValues();
    return Object.entries(cond).every(([k, allowed]) => (vals[k] ?? []).some((v) => allowed.includes(v)));
  };

  const visibleSteps = () => steps.filter(isVisible);

  const collect = (): Answers => {
    const out: Answers = {};
    for (const fs of visibleSteps()) {
      const checked = Array.from(fs.querySelectorAll<HTMLInputElement>('input:checked'));
      if (!checked.length) continue;
      out[fs.dataset.step!] = {
        values: checked.map((i) => i.value),
        labels: checked.map((i) => i.dataset.label ?? i.value),
        points: Math.max(0, ...checked.map((i) => Number(i.dataset.points ?? 0))),
        level: Math.max(0, ...checked.map((i) => Number(i.dataset.level ?? 0))),
      };
    }
    return out;
  };

  const stopsHere = (fs: HTMLFieldSetElement) =>
    Array.from(fs.querySelectorAll<HTMLInputElement>('input:checked')).some((i) => i.dataset.stop === 'true');

  function setProgress(index: number, total: number) {
    const pct = total ? Math.round((index / total) * 100) : 0;
    progressText.textContent = `Question ${Math.min(index + 1, total)} of ${total}`;
    progressBar.style.setProperty('--progress', `${pct}%`);
    progressBar.parentElement?.setAttribute('aria-valuenow', String(pct));
  }

  function focusHeading(el: HTMLElement | null) {
    if (!el) return;
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    root!.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  function show(index: number, push = true) {
    const vis = visibleSteps();
    if (index < 0) {
      intro.hidden = false;
      form.hidden = true;
      progress.hidden = true;
      resultBox.hidden = true;
      current = -1;
      if (push) history.pushState({ checker: id, step: -1 }, '');
      focusHeading(intro.querySelector('h2'));
      return;
    }
    const target = vis[Math.min(index, vis.length - 1)];
    intro.hidden = true;
    form.hidden = false;
    resultBox.hidden = true;
    nav.hidden = false;
    progress.hidden = false;
    for (const fs of steps) fs.classList.toggle('is-active', fs === target);
    current = vis.indexOf(target);
    error.textContent = '';
    setProgress(current, vis.length);
    back.hidden = false;
    next.textContent = current === vis.length - 1 ? 'See my result' : 'Continue';
    if (push) history.pushState({ checker: id, step: current }, '');
    focusHeading(target.querySelector('.step__title'));
  }

  function renderResult(view: ResultView) {
    const scores = (view.scores ?? [])
      .map((s) => {
        const fill = s.max ? Math.min(100, Math.round(((s.points ?? 0) / s.max) * 100)) : 0;
        return `<div class="score">
          <div class="score__name">${esc(s.name)}</div>
          ${s.points !== undefined ? `<div class="score__points">${s.points}<small> points</small></div>` : ''}
          <span class="score__band" data-level="${esc(s.level)}">${esc(s.band)}</span>
          ${s.max ? `<div class="score__meter" role="img" aria-label="${s.points} points. ${s.max} points reaches the top rate."><span style="--fill:${fill}%"></span></div>` : ''}
          ${s.threshold ? `<p class="score__amount">You need ${s.threshold} points for the standard rate and 12 for the enhanced rate.</p>` : ''}
          ${s.amount ? `<p class="score__amount">${esc(s.amount)}</p>` : ''}
        </div>`;
      })
      .join('');
    const table = view.table
      ? `<section><h3>${esc(view.table.heading)}</h3>
          <table class="answers"><tbody>${view.table.rows
            .map((r) => `<tr><th scope="row">${esc(r.label)}</th><td>${esc(r.answer)}</td>${r.points !== undefined ? `<td>${esc(r.points)}</td>` : ''}</tr>`)
            .join('')}</tbody></table></section>`
      : '';
    const nextLinks = view.next.length
      ? `<section><h3>What to do next</h3><div class="grid" style="--grid-min:15rem;--grid-gap:var(--space-s)">${view.next
          .map((n) => `<a class="btn btn--ghost btn--block" href="${esc(n.href)}">${esc(n.label)}</a>`)
          .join('')}</div></section>`
      : '';
    resultBox.innerHTML = `
      <div class="result">
        <div class="result__headline" data-tone="${view.tone}">
          <p class="eyebrow" style="color:#e2d6f6">Your estimate</p>
          <h2 tabindex="-1">${esc(view.headline)}</h2>
        </div>
        ${scores ? `<div class="result__scores">${scores}</div>` : ''}
        <div class="prose">${view.body}</div>
        ${table}
        ${nextLinks}
        <div class="checker__tools no-print">
          <button type="button" class="btn" data-print>Print or save as PDF</button>
          <button type="button" class="btn btn--ghost" data-save>${store?.getItem(saveKey) ? 'Update saved answers' : 'Save my answers on this device'}</button>
          <button type="button" class="btn btn--ghost" data-edit>Change my answers</button>
          <button type="button" class="btn btn--ghost" data-restart>Start again</button>
        </div>
        <p class="small muted" data-save-status role="status"></p>
      </div>`;
    intro.hidden = true;
    form.hidden = true;
    progress.hidden = true;
    resultBox.hidden = false;
    focusHeading(resultBox.querySelector('h2'));
  }

  function finish(push = true) {
    const view = score(collect());
    renderResult(view);
    current = visibleSteps().length;
    if (push) history.pushState({ checker: id, step: 'result' }, '');
  }

  function validate(fs: HTMLFieldSetElement): boolean {
    if (stepAnswers(fs).length) return true;
    error.textContent =
      fs.dataset.type === 'multi' ? 'Please tick at least one box, or choose "None of these".' : 'Please choose one answer to continue.';
    fs.querySelector<HTMLInputElement>('input')?.focus();
    return false;
  }

  /* Wire up controls */
  root.querySelector('[data-start]')?.addEventListener('click', () => show(0));
  function advance() {
    const vis = visibleSteps();
    const fs = vis[current];
    if (!fs || !validate(fs)) return;
    if (stopsHere(fs) || current >= vis.length - 1) finish();
    else show(current + 1);
  }
  back.addEventListener('click', () => {
    if (current <= 0) show(-1);
    else show(current - 1);
  });

  // "None of these" clears the other ticks, and ticking anything else clears "None of these".
  form.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    error.textContent = '';
    if (input.type !== 'checkbox' || !input.checked) return;
    const fs = input.closest('fieldset')!;
    const boxes = Array.from(fs.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
    if (input.dataset.exclusive === 'true') boxes.forEach((b) => b !== input && (b.checked = false));
    else boxes.forEach((b) => b.dataset.exclusive === 'true' && (b.checked = false));
  });

  // The Continue button is the form's submit button, so Enter also moves on.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    advance();
  });

  resultBox.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest('button');
    if (!t) return;
    if (t.hasAttribute('data-print')) window.print();
    if (t.hasAttribute('data-edit')) show(0);
    if (t.hasAttribute('data-restart')) {
      form.reset();
      store?.removeItem(saveKey);
      show(-1);
    }
    if (t.hasAttribute('data-save')) {
      const status = resultBox.querySelector<HTMLElement>('[data-save-status]')!;
      if (!store) {
        status.textContent = 'Your browser is not allowing saving right now, so your answers were not saved.';
        return;
      }
      const state: SavedState = { version: 1, answers: allValues(), stepIndex: 0 };
      store.setItem(saveKey, JSON.stringify(state));
      status.textContent =
        'Saved on this device only. Nothing has been sent to us. Anyone using this device and browser could see them, so choose "Start again" to delete them.';
      t.textContent = 'Update saved answers';
    }
  });

  // The phone's back button steps back through the questions.
  window.addEventListener('popstate', (e) => {
    const s = e.state as { checker?: string; step?: number | 'result' } | null;
    if (!s || s.checker !== id) {
      show(-1, false);
      return;
    }
    if (s.step === 'result') finish(false);
    else show(s.step ?? -1, false);
  });
  history.replaceState({ checker: id, step: -1 }, '');

  /* Offer to reload saved answers */
  const saved = store?.getItem(saveKey);
  if (saved && resumeBox) {
    try {
      const state = JSON.parse(saved) as SavedState;
      resumeBox.hidden = false;
      resumeBox.querySelector('[data-resume-yes]')?.addEventListener('click', () => {
        for (const fs of steps) {
          const vals = state.answers[fs.dataset.step!] ?? [];
          fs.querySelectorAll<HTMLInputElement>('input').forEach((i) => (i.checked = vals.includes(i.value)));
        }
        resumeBox.hidden = true;
        finish();
      });
      resumeBox.querySelector('[data-resume-no]')?.addEventListener('click', () => {
        store?.removeItem(saveKey);
        resumeBox.hidden = true;
      });
    } catch {
      store?.removeItem(saveKey);
    }
  }

  // Make sure things are in their starting state.
  form.hidden = true;
  progress.hidden = true;
  nav.hidden = true;
}
