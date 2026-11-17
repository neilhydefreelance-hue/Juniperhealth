import { describe, expect, it } from 'vitest';
import { backPay, RATE_PERIODS } from '../src/lib/pip-backpay';
import rates from '../src/data/rates.json';

describe('PIP back pay', () => {
  it('uses the current rates from rates.json for the latest year', () => {
    expect(RATE_PERIODS.at(-1)).toMatchObject(rates.pip);
  });

  it('pays exactly 4 weeks at the current enhanced rates', () => {
    const r = backPay('enhanced', 'enhanced', '2026-06-01', '2026-06-28');
    expect(r.ok && r.days).toBe(28);
    expect(r.ok && r.total).toBeCloseTo((114.6 + 80) * 4, 2);
  });

  it('splits a claim across the April rate change', () => {
    const r = backPay('standard', 'none', '2026-03-30', '2026-04-12');
    if (!r.ok) throw new Error('expected ok');
    expect(r.parts.map((p) => p.days)).toEqual([7, 7]);
    expect(r.total).toBeCloseTo(73.9 + 76.7, 2);
  });

  it('counts the start and end dates', () => {
    const r = backPay('none', 'standard', '2026-05-04', '2026-05-04');
    expect(r.ok && r.days).toBe(1);
  });

  it('rejects bad input', () => {
    expect(backPay('none', 'none', '2026-05-01', '2026-06-01')).toEqual({ ok: false, error: 'noAward' });
    expect(backPay('standard', 'none', '', '2026-06-01')).toEqual({ ok: false, error: 'badDate' });
    expect(backPay('standard', 'none', '2020-01-01', '2026-06-01')).toEqual({ ok: false, error: 'tooEarly' });
    expect(backPay('standard', 'none', '2026-06-01', '2026-05-01')).toEqual({ ok: false, error: 'endBeforeStart' });
  });
});
