/** Free printable resources, listed on /resources/. Files live in public/guides/. */
export const RESOURCES = [
  {
    title: 'How to fill in your PIP form',
    href: '/guides/how-to-fill-in-your-pip-form.pdf',
    pages: 25,
    audience: 'For adults claiming PIP',
    icon: 'document',
    blurb:
      'A question by question guide to the PIP "How your disability affects you" form, with what scores points, example answers, a symptom diary and a checklist before you send it.',
    related: { label: 'PIP guide', href: '/benefits/pip/' },
  },
  {
    title: 'Our autism planner',
    href: '/guides/our-autism-planner.pdf',
    pages: 33,
    audience: 'For parents and autistic children to use together',
    icon: 'people',
    blurb:
      'A planner and tracker for sleep, food, feelings, meltdowns and routines, with a weekly meal planner, goal plans you work on together, a communication passport, and trackers for SEN support, EHC plans (England) and IDPs (Wales).',
    related: { label: 'DLA for children guide', href: '/benefits/dla/' },
  },
] as const;
