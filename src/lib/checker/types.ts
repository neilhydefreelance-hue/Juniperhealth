/** Shared shapes for the self-check tools. */

export interface CheckerOption {
  value: string;
  label: string;
  detail?: string;
  /** PIP descriptor points, shown to the user and used for scoring. */
  points?: number;
  /** A number the scorer uses for non-PIP tools (for example how often help is needed). */
  level?: number;
  /** Choosing this ends the questions early and goes straight to the result. */
  stop?: boolean;
  /** In a tick-box question, this option clears the others ("None of these"). */
  exclusive?: boolean;
}

export interface CheckerStep {
  id: string;
  kicker?: string;
  title: string;
  hint?: string;
  /** Extra help shown in an expandable "What this means" panel. Trusted HTML. */
  help?: string;
  type: 'single' | 'multi';
  options: CheckerOption[];
  /** Only show this step when an earlier answer is one of these values. */
  showIf?: Record<string, string[]>;
}

export interface CheckerDefinition {
  id: 'pip' | 'aa' | 'dla';
  name: string;
  steps: CheckerStep[];
}

/** What the page collects from the form and hands to the scorer. */
export interface Answer {
  values: string[];
  labels: string[];
  points: number;
  level: number;
}
export type Answers = Record<string, Answer>;

export interface ScoreCard {
  name: string;
  points?: number;
  max?: number;
  threshold?: number;
  band: string;
  level: string;
  amount?: string;
}

export interface ResultView {
  tone: 'good' | 'maybe' | 'unlikely' | 'redirect';
  headline: string;
  /** Trusted HTML built by the scorer. */
  body: string;
  scores?: ScoreCard[];
  table?: { heading: string; rows: { label: string; answer: string; points?: string }[] };
  next: { label: string; href: string }[];
}

export type Scorer = (answers: Answers) => ResultView;
