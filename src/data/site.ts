import settings from './settings.json';

export const SITE = {
  name: 'Juniper Health',
  url: 'https://juniperhealth.app',
  tagline: 'Clear, kind help with health conditions and disability benefits',
  description:
    'Plain-English guides to health conditions and disability benefits in England and Wales, with free PIP, Attendance Allowance and DLA self-checks.',
  locale: 'en_GB',
  lang: 'en-GB',
  ownerName: settings.ownerName,
  tradingName: settings.tradingName,
  email: settings.email,
  postalAddress: settings.postalAddress.trim(),
  donationUrl: settings.donationUrl.trim(),
  icoNumber: settings.icoNumber.trim(),
  analyticsToken: (settings.analyticsToken ?? '').trim(),
  authorSlug: '/about/neil-hyde/',
  logo: '/images/logo-512.webp',
  ogImage: '/images/og-default.png',
} as const;

/** Shown wherever the law needs an address but none has been added yet. */
export const ADDRESS_PLACEHOLDER = 'Address to be confirmed';

export const addressLines = (): string[] =>
  SITE.postalAddress ? SITE.postalAddress.split(/\n|,\s*/).map((l) => l.trim()).filter(Boolean) : [ADDRESS_PLACEHOLDER];

export const NAV = [
  {
    label: 'Conditions',
    href: '/conditions/',
    children: [{ label: 'Physical conditions', href: '/conditions/physical/' }],
  },
  {
    label: 'Benefits',
    href: '/benefits/',
    children: [
      { label: 'PIP', href: '/benefits/pip/' },
      { label: 'Attendance Allowance', href: '/benefits/attendance-allowance/' },
      { label: 'DLA for children', href: '/benefits/dla/' },
    ],
  },
  {
    label: 'Self-checks',
    href: '/tools/',
    children: [
      { label: 'PIP points self-check', href: '/benefits/pip/points-checker/' },
      { label: 'Attendance Allowance check', href: '/benefits/attendance-allowance/checker/' },
      { label: 'DLA for children check', href: '/benefits/dla/checker/' },
    ],
  },
  { label: 'About', href: '/about/' },
] as const;

export const TOOLS = {
  pip: {
    name: 'PIP points self-check',
    href: '/benefits/pip/points-checker/',
    blurb: 'Go through the 12 PIP activities one at a time and see roughly how many points may apply to you.',
    time: 'About 10 minutes',
  },
  aa: {
    name: 'Attendance Allowance check',
    href: '/benefits/attendance-allowance/checker/',
    blurb: 'For people over State Pension age. See if you may qualify and at which rate.',
    time: 'About 4 minutes',
  },
  dla: {
    name: 'DLA for children check',
    href: '/benefits/dla/checker/',
    blurb: 'For parents and carers of children under 16. See which parts of DLA may apply.',
    time: 'About 5 minutes',
  },
} as const;

export type ToolKey = keyof typeof TOOLS;

export const money = (n: number): string => `£${n.toFixed(2)}`;
