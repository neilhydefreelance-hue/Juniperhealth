// Shared helpers for the bipolar video series.
export const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;
export const point = (n, title, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2>${body}`,
});
export const big = (stat, title, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="big" data-in="0.1">${stat}</div><h2 data-in="0.35">${title}</h2><p data-in="0.8">${body}</p>`,
});
export const urgent = {
  dur: 5.4,
  kind: 'point',
  html: `<div class="num" data-in="0.1">!</div>
    <h2 data-in="0.35">Get urgent help if</h2>
    <p data-in="0.8">Someone is very unwell, at risk of harm or having thoughts of suicide. Contact the crisis team, call NHS 111 and choose the mental health option, or call 999.</p>`,
};
export const end = (title, small) => ({
  dur: 5.0,
  kind: 'end',
  html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
    <h2 data-in="0.25">${title}</h2>
    <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
    <p class="small" data-in="0.9">${small}</p>`,
});
