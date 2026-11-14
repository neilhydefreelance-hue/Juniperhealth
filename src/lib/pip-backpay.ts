/**
 * PIP back pay estimate.
 *
 * PIP is paid from the date you started your claim, so a new award
 * usually comes with a back payment. This works out a rough figure by
 * counting the days between two dates and using the weekly rate that
 * applied on each day. Everything runs in the browser.
 */
import rates from '../data/rates.json';

export type Level = 'none' | 'standard' | 'enhanced';

export interface RatePeriod {
  /** First day the rates apply, as YYYY-MM-DD. */
  from: string;
  label: string;
  dailyStandard: number;
  dailyEnhanced: number;
  mobilityStandard: number;
  mobilityEnhanced: number;
}

/** Weekly PIP rates by tax year, oldest first. The latest comes from rates.json. */
export const RATE_PERIODS: RatePeriod[] = [
  { from: '2023-04-10', label: '2023 to 2024', dailyStandard: 68.1, dailyEnhanced: 101.75, mobilityStandard: 26.9, mobilityEnhanced: 71 },
  { from: '2024-04-08', label: '2024 to 2025', dailyStandard: 72.65, dailyEnhanced: 108.55, mobilityStandard: 28.7, mobilityEnhanced: 75.75 },
  { from: '2025-04-07', label: '2025 to 2026', dailyStandard: 73.9, dailyEnhanced: 110.4, mobilityStandard: 29.2, mobilityEnhanced: 77.05 },
  { from: '2026-04-06', label: rates.taxYear, ...rates.pip },
];

export const EARLIEST = RATE_PERIODS[0].from;

const DAY = 86_400_000;
const toDay = (iso: string): number => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d) / DAY;
};

export function weekly(period: RatePeriod, daily: Level, mobility: Level): number {
  const d = daily === 'enhanced' ? period.dailyEnhanced : daily === 'standard' ? period.dailyStandard : 0;
  const m = mobility === 'enhanced' ? period.mobilityEnhanced : mobility === 'standard' ? period.mobilityStandard : 0;
  return d + m;
}

export interface BackPayPart {
  label: string;
  days: number;
  weekly: number;
  amount: number;
}

export type BackPayResult =
  | { ok: true; total: number; days: number; weeks: number; parts: BackPayPart[]; weeklyNow: number }
  | { ok: false; error: 'noAward' | 'badDate' | 'tooEarly' | 'endBeforeStart' };

/**
 * Estimate back pay from `start` up to and including `end` (both YYYY-MM-DD).
 */
export function backPay(daily: Level, mobility: Level, start: string, end: string): BackPayResult {
  if (daily === 'none' && mobility === 'none') return { ok: false, error: 'noAward' };
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  if (!iso.test(start) || !iso.test(end)) return { ok: false, error: 'badDate' };
  const s = toDay(start);
  const e = toDay(end);
  if (Number.isNaN(s) || Number.isNaN(e)) return { ok: false, error: 'badDate' };
  if (s < toDay(EARLIEST)) return { ok: false, error: 'tooEarly' };
  if (e < s) return { ok: false, error: 'endBeforeStart' };

  const parts: BackPayPart[] = [];
  RATE_PERIODS.forEach((p, i) => {
    const pFrom = toDay(p.from);
    const next = RATE_PERIODS[i + 1];
    const pTo = next ? toDay(next.from) - 1 : Infinity;
    const from = Math.max(s, pFrom);
    const to = Math.min(e, pTo);
    if (to < from) return;
    const days = to - from + 1;
    const w = weekly(p, daily, mobility);
    parts.push({ label: p.label, days, weekly: w, amount: Math.round(((w * days) / 7) * 100) / 100 });
  });

  const days = e - s + 1;
  const total = Math.round(parts.reduce((t, p) => t + p.amount, 0) * 100) / 100;
  return {
    ok: true,
    total,
    days,
    weeks: Math.floor(days / 7),
    parts,
    weeklyNow: weekly(RATE_PERIODS[RATE_PERIODS.length - 1], daily, mobility),
  };
}
