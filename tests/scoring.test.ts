import { describe, expect, it } from 'vitest';
import { scorePip, pipChecker } from '../src/lib/checker/pip';
import { scoreAa, aaChecker } from '../src/lib/checker/aa';
import { scoreDla, dlaChecker } from '../src/lib/checker/dla';
import type { Answers } from '../src/lib/checker/types';

/** Build answers the same way the browser does, from step id and option value. */
function answers(defSteps: typeof pipChecker.steps, picks: Record<string, string | string[]>): Answers {
  const out: Answers = {};
  for (const [id, pick] of Object.entries(picks)) {
    const step = defSteps.find((s) => s.id === id)!;
    const values = Array.isArray(pick) ? pick : [pick];
    const opts = values.map((v) => step.options.find((o) => o.value === v)!);
    out[id] = {
      values,
      labels: opts.map((o) => o.label),
      points: Math.max(0, ...opts.map((o) => o.points ?? 0)),
      level: Math.max(0, ...opts.map((o) => o.level ?? 0)),
    };
  }
  return out;
}

const pipBase = { age: 'working', where: 'ew', duration: 'long' };
const allA = Object.fromEntries(Array.from({ length: 12 }, (_, i) => [`a${i + 1}`, 'a']));

describe('PIP descriptors match the regulations', () => {
  const pts = (id: string) => pipChecker.steps.find((s) => s.id === id)!.options.map((o) => o.points);
  it('has the right points for every activity', () => {
    expect(pts('a1')).toEqual([0, 2, 2, 2, 4, 8]);
    expect(pts('a2')).toEqual([0, 2, 2, 4, 6, 10]);
    expect(pts('a3')).toEqual([0, 1, 1, 2, 4, 6, 8]);
    expect(pts('a4')).toEqual([0, 2, 2, 2, 3, 4, 8]);
    expect(pts('a5')).toEqual([0, 2, 2, 4, 6, 8]);
    expect(pts('a6')).toEqual([0, 2, 2, 2, 4, 8]);
    expect(pts('a7')).toEqual([0, 2, 4, 8, 12]);
    expect(pts('a8')).toEqual([0, 2, 2, 4, 8]);
    expect(pts('a9')).toEqual([0, 2, 4, 8]);
    expect(pts('a10')).toEqual([0, 2, 4, 6]);
    expect(pts('a11')).toEqual([0, 4, 8, 10, 10, 12]);
    expect(pts('a12')).toEqual([0, 4, 8, 10, 12, 12]);
  });
});

describe('scorePip', () => {
  it('gives nothing when every activity is fine', () => {
    const r = scorePip(answers(pipChecker.steps, { ...pipBase, ...allA }));
    expect(r.tone).toBe('unlikely');
    expect(r.scores?.map((s) => s.points)).toEqual([0, 0]);
  });
  it('gives the standard daily living rate at 8 points', () => {
    const r = scorePip(answers(pipChecker.steps, { ...pipBase, ...allA, a1: 'e', a4: 'b', a6: 'b' }));
    expect(r.scores?.[0]).toMatchObject({ points: 8, level: 'standard' });
    expect(r.headline).toContain('£76.70');
  });
  it('gives enhanced rates at 12 points or more', () => {
    const r = scorePip(answers(pipChecker.steps, { ...pipBase, ...allA, a1: 'f', a4: 'f', a12: 'e' }));
    expect(r.scores?.[0]).toMatchObject({ points: 12, level: 'enhanced' });
    expect(r.scores?.[1]).toMatchObject({ points: 12, level: 'enhanced' });
    expect(r.headline).toContain('£194.60');
  });
  it('flags a near miss', () => {
    const r = scorePip(answers(pipChecker.steps, { ...pipBase, ...allA, a1: 'e', a4: 'b' }));
    expect(r.tone).toBe('maybe');
  });
  it('gives enhanced daily living under the special rules', () => {
    const r = scorePip(answers(pipChecker.steps, { ...pipBase, duration: 'terminal', ...allA }));
    expect(r.scores?.[0].level).toBe('enhanced');
  });
  it('sends under 16s to DLA and Scotland to ADP', () => {
    expect(scorePip(answers(pipChecker.steps, { age: 'under16' })).next[0].href).toContain('/dla/');
    expect(scorePip(answers(pipChecker.steps, { age: 'working', where: 'scotland' })).headline).toContain('Adult Disability Payment');
  });
});

describe('scoreAa', () => {
  const base = { age: 'yes', where: 'ew', existing: 'no', terminal: 'no', duration: 'long', home: 'home' };
  it('higher rate for day and night needs', () => {
    const r = scoreAa(answers(aaChecker.steps, { ...base, tasks: ['wash', 'safe'], day: 'frequent', night: 'watch' }));
    expect(r.scores?.[0].level).toBe('higher');
  });
  it('lower rate for day needs only', () => {
    const r = scoreAa(answers(aaChecker.steps, { ...base, tasks: ['dress'], day: 'continual', night: 'none' }));
    expect(r.scores?.[0].level).toBe('lower');
  });
  it('borderline when help is only once or twice a day', () => {
    const r = scoreAa(answers(aaChecker.steps, { ...base, tasks: ['dress'], day: 'once', night: 'none' }));
    expect(r.tone).toBe('maybe');
  });
  it('no day rate when no tasks were ticked', () => {
    const r = scoreAa(answers(aaChecker.steps, { ...base, tasks: ['none'], night: 'none' }));
    expect(r.tone).toBe('unlikely');
  });
  it('special rules give the higher rate', () => {
    expect(scoreAa(answers(aaChecker.steps, { ...base, terminal: 'yes' })).headline).toContain('£114.60');
  });
});

describe('scoreDla', () => {
  const base = { where: 'ew', terminal: 'no', duration: 'long' };
  it('highest care plus higher mobility', () => {
    const r = scoreDla(answers(dlaChecker.steps, { ...base, age: 'five', more: 'lot', day: 'frequent', night: 'repeated', walking: 'cannot', guidance: 'no' }));
    expect(r.scores?.map((s) => s.level)).toEqual(['highest', 'higher']);
    expect(r.headline).toContain('£194.60');
  });
  it('no mobility part under 3', () => {
    const r = scoreDla(answers(dlaChecker.steps, { ...base, age: 'toddler', more: 'lot', day: 'some', night: 'none' }));
    expect(r.scores?.length).toBe(1);
    expect(r.scores?.[0].level).toBe('lowest');
  });
  it('lower mobility needs age 5', () => {
    const three = scoreDla(answers(dlaChecker.steps, { ...base, age: 'three', more: 'bit', day: 'none', night: 'none', walking: 'ok' }));
    expect(three.scores?.[1].level).toBe('none');
    const five = scoreDla(answers(dlaChecker.steps, { ...base, age: 'five', more: 'bit', day: 'none', night: 'none', walking: 'ok', guidance: 'yes' }));
    expect(five.scores?.[1].level).toBe('lower');
  });
  it('nothing if needs are the same as other children', () => {
    const r = scoreDla(answers(dlaChecker.steps, { ...base, age: 'five', more: 'same', day: 'frequent', night: 'none', walking: 'ok', guidance: 'no' }));
    expect(r.scores?.[0].level).toBe('none');
  });
});
