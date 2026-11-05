// Shared scene helpers for the TikTok videos.
export const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;
export const title = (eyebrow, lines, sub, dur = 3.6) => ({
  dur,
  kind: 'title',
  html: `<div class="eyebrow" data-in="0.1">${eyebrow}</div>
    <h1>${lines.map((l, i) => `<span class="line" data-in="${(0.3 + i * 0.25).toFixed(2)}">${l}</span>`).join('')}</h1>
    ${sub ? `<p data-in="${(0.6 + lines.length * 0.25).toFixed(2)}">${sub}</p>` : ''}`,
});
export const point = (n, heading, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${heading}</h2>${body}`,
});
export const big = (stat, heading, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="big" data-in="0.1">${stat}</div><h2 data-in="0.35">${heading}</h2><p data-in="0.8">${body}</p>`,
});
export const p = (text, at = 0.8) => `<p data-in="${at}">${text}</p>`;
export const end = (heading, small, dur = 5.0) => ({
  dur,
  kind: 'end',
  html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
    <h2 data-in="0.25">${heading}</h2>
    <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
    <p class="small" data-in="0.9">${small}</p>`,
});
