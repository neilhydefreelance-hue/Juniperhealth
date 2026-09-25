/**
 * Keystatic editor setup.
 *
 * This file decides what you see at juniperhealth.app/keystatic: which kinds of page
 * you can create, and which boxes each page has. Every page is saved as a file
 * in this repository, so nothing is locked away in a database.
 *
 * Storage:
 *   - On your own computer (npm run dev) the editor saves straight to the files.
 *   - On the live site it saves through Keystatic Cloud, which commits to GitHub for you.
 *     Set PUBLIC_KEYSTATIC_CLOUD_PROJECT (for example "juniper-health/juniperhealth")
 *     in the Cloudflare build settings. See docs/EDITING.md.
 */
import { config, collection, singleton, fields } from '@keystatic/core';
import { wrapper, block } from '@keystatic/core/content-components';

const cloudProject = import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT as string | undefined;
const storageKind = (import.meta.env.PUBLIC_KEYSTATIC_STORAGE ?? (import.meta.env.DEV ? 'local' : cloudProject ? 'cloud' : 'github')) as
  | 'local'
  | 'github'
  | 'cloud';

const storage =
  storageKind === 'github'
    ? ({ kind: 'github', repo: (import.meta.env.PUBLIC_KEYSTATIC_REPO ?? 'neilhydefreelance-hue/juniperhealth') as `${string}/${string}` } as const)
    : storageKind === 'cloud'
      ? ({ kind: 'cloud' } as const)
      : ({ kind: 'local' } as const);

/* Building blocks you can drop into any page body. */
const contentComponents = {
  donateButton: block({
    label: 'Donate button',
    description: 'A button linking to the donation link in Site settings.',
    schema: {},
  }),
  businessDetails: block({
    label: 'Business details box',
    description: 'Shows the owner name, trading name, address and email from Site settings.',
    schema: {},
  }),
  analyticsOptOut: block({
    label: 'Statistics opt-out switch',
    description: 'The switch that lets visitors turn off our visitor statistics. Keep this on the cookie policy page.',
    schema: {},
  }),
  pipActivities: block({
    label: 'PIP activities and points tables',
    description: 'Shows all 12 PIP activities with their statements and points, taken from the PIP self-check.',
    schema: {},
  }),
  callout: wrapper({
    label: 'Highlight box',
    description: 'A coloured box for tips, warnings or key facts.',
    schema: {
      type: fields.select({
        label: 'Style',
        options: [
          { label: 'Information (purple)', value: 'info' },
          { label: 'Good news or tip (green)', value: 'good' },
          { label: 'Take care (amber)', value: 'warn' },
          { label: 'Urgent (red)', value: 'danger' },
        ],
        defaultValue: 'info',
      }),
      title: fields.text({ label: 'Box heading (optional)' }),
    },
  }),
  checker: block({
    label: 'Link to a self-check tool',
    description: 'A large button card that sends people to one of the checkers.',
    schema: {
      tool: fields.select({
        label: 'Which tool',
        options: [
          { label: 'PIP points self-check', value: 'pip' },
          { label: 'Attendance Allowance check', value: 'aa' },
          { label: 'DLA for children check', value: 'dla' },
        ],
        defaultValue: 'pip',
      }),
    },
  }),
};

/* Boxes shared by every health and benefits page. */
const sharedPageFields = {
  navTitle: fields.text({
    label: 'Short menu name',
    description: 'Shown in the page menu at the top of a topic. Keep it to one to three words, for example "Symptoms".',
  }),
  description: fields.text({
    label: 'Search result description',
    description: 'One or two sentences shown in Google. Aim for 120 to 155 characters.',
    multiline: true,
    validation: { length: { min: 50, max: 170 } },
  }),
  summary: fields.text({
    label: 'Opening summary',
    description: 'Shown in large text under the page title.',
    multiline: true,
  }),
  order: fields.integer({ label: 'Position in the topic menu', defaultValue: 10 }),
  lastReviewed: fields.date({ label: 'Last checked for accuracy', validation: { isRequired: true } }),
  sources: fields.array(
    fields.object({
      label: fields.text({ label: 'Source name' }),
      url: fields.url({ label: 'Link' }),
    }),
    { label: 'Sources', itemLabel: (props) => props.fields.label.value || 'Source' },
  ),
  faqs: fields.array(
    fields.object({
      question: fields.text({ label: 'Question' }),
      answer: fields.text({ label: 'Answer', multiline: true }),
    }),
    { label: 'Common questions', itemLabel: (props) => props.fields.question.value || 'Question' },
  ),
};

export default config({
  storage,
  ...(cloudProject ? { cloud: { project: cloudProject } } : {}),
  ui: {
    brand: { name: 'Juniper Health' },
    navigation: {
      'Health conditions': ['conditions'],
      Benefits: ['benefits'],
      'Other pages': ['pages'],
      'Affiliate products': ['products'],
      'Site settings': ['settings', 'rates'],
    },
  },
  collections: {
    conditions: collection({
      label: 'Health condition pages',
      path: 'src/content/conditions/**',
      slugField: 'title',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'lastReviewed'],
      schema: {
        title: fields.slug({
          name: { label: 'Page title' },
          slug: {
            label: 'Web address',
            description:
              'Start with the category, then the condition. A category page is just its name, for example "physical". A condition main page is "physical/asthma". A page inside it is "physical/asthma/treatment".',
          },
        }),
        ...sharedPageFields,
        conditionName: fields.text({
          label: 'Condition name',
          description: 'Needed on the main page of a condition, for example "Asthma". Leave empty on category pages and pages inside a condition.',
        }),
        alternateNames: fields.array(fields.text({ label: 'Other name' }), {
          label: 'Other names for this condition',
          itemLabel: (props) => props.value,
        }),
        icd10: fields.text({ label: 'ICD-10 code (optional)', description: 'For search engines only, for example M79.7.' }),
        cardIcon: fields.select({
          label: 'Card icon',
          options: [
            { label: 'Leaf', value: 'leaf' },
            { label: 'Heart', value: 'heart' },
            { label: 'Brain', value: 'brain' },
            { label: 'Body', value: 'body' },
            { label: 'Lungs', value: 'lungs' },
            { label: 'Ear', value: 'ear' },
            { label: 'Joint', value: 'joint' },
            { label: 'Drop (blood sugar)', value: 'drop' },
            { label: 'Pulse (blood pressure)', value: 'pulse' },
            { label: 'Thyroid', value: 'thyroid' },
            { label: 'Shield', value: 'shield' },
            { label: 'People', value: 'people' },
            { label: 'Wave (mood)', value: 'wave' },
            { label: 'Cup', value: 'cup' },
            { label: 'Pill', value: 'pill' },
            { label: 'Loop', value: 'loop' },
            { label: 'Lightning bolt', value: 'bolt' },
          ],
          defaultValue: 'leaf',
        }),
        body: fields.markdoc({ label: 'Page content', components: contentComponents }),
      },
    }),
    benefits: collection({
      label: 'Benefit pages',
      path: 'src/content/benefits/**',
      slugField: 'title',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'lastReviewed'],
      schema: {
        title: fields.slug({
          name: { label: 'Page title' },
          slug: {
            label: 'Web address',
            description: 'For the main page of a benefit use its short name, for example "pip". For a page inside it, for example "pip/how-to-claim".',
          },
        }),
        ...sharedPageFields,
        benefitName: fields.text({ label: 'Full benefit name', description: 'Only needed on the main page, for example "Personal Independence Payment".' }),
        showRates: fields.select({
          label: 'Show the rates box',
          options: [
            { label: 'No', value: 'none' },
            { label: 'PIP rates', value: 'pip' },
            { label: 'Attendance Allowance rates', value: 'aa' },
            { label: 'DLA rates', value: 'dla' },
          ],
          defaultValue: 'none',
        }),
        body: fields.markdoc({ label: 'Page content', components: contentComponents }),
      },
    }),
    pages: collection({
      label: 'Other pages (about, legal)',
      path: 'src/content/pages/**',
      slugField: 'title',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Page title' }, slug: { label: 'Web address' } }),
        description: fields.text({ label: 'Search result description', multiline: true }),
        summary: fields.text({ label: 'Opening summary', multiline: true }),
        lastUpdated: fields.date({ label: 'Last updated', validation: { isRequired: true } }),
        body: fields.markdoc({ label: 'Page content', components: contentComponents }),
      },
    }),
    products: collection({
      label: 'Affiliate products',
      path: 'src/content/products/*',
      slugField: 'name',
      format: { data: 'json' },
      columns: ['name', 'merchant'],
      schema: {
        name: fields.slug({ name: { label: 'Product name' } }),
        description: fields.text({
          label: 'Why it helps',
          description: 'One or two plain sentences. Never claim it treats or cures anything.',
          multiline: true,
        }),
        merchant: fields.text({ label: 'Shop name', description: 'For example "Amazon".' }),
        url: fields.url({ label: 'Affiliate link', validation: { isRequired: true } }),
        conditions: fields.multiselect({
          label: 'Show on these condition pages',
          options: [
            { label: 'Asthma', value: 'asthma' },
            { label: 'COPD', value: 'copd' },
            { label: 'Coronary heart disease', value: 'coronary-heart-disease' },
            { label: 'Fibromyalgia', value: 'fibromyalgia' },
            { label: 'Hearing loss', value: 'hearing-loss' },
            { label: 'High blood pressure', value: 'high-blood-pressure' },
            { label: 'Hypothyroidism', value: 'hypothyroidism' },
            { label: 'Migraine', value: 'migraine' },
            { label: 'Obesity', value: 'obesity' },
            { label: 'Osteoarthritis', value: 'osteoarthritis' },
            { label: 'Type 1 diabetes', value: 'type-1-diabetes' },
            { label: 'Type 2 diabetes', value: 'type-2-diabetes' },
          ],
          defaultValue: ['fibromyalgia'],
        }),
        active: fields.checkbox({ label: 'Show on the site', defaultValue: true }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Business details',
      path: 'src/data/settings',
      format: { data: 'json' },
      schema: {
        ownerName: fields.text({ label: 'Owner name' }),
        tradingName: fields.text({ label: 'Trading name' }),
        email: fields.text({ label: 'Contact email' }),
        postalAddress: fields.text({
          label: 'Address for legal documents',
          description: 'The law requires this for a sole trader using a trading name. It can be a service address.',
          multiline: true,
        }),
        donationUrl: fields.url({ label: 'Donation link (Ko-fi or Stripe)' }),
        icoNumber: fields.text({ label: 'ICO registration number (if registered)' }),
        analyticsToken: fields.text({
          label: 'Cloudflare Web Analytics token',
          description: 'Leave empty to switch analytics off. The token is shown in the Cloudflare dashboard under Web Analytics.',
        }),
      },
    }),
    rates: singleton({
      label: 'Benefit rates',
      path: 'src/data/rates',
      format: { data: 'json' },
      schema: {
        taxYear: fields.text({ label: 'Tax year', description: 'For example "2026 to 2027".' }),
        from: fields.text({ label: 'Rates apply from', description: 'For example "April 2026".' }),
        pip: fields.object(
          {
            dailyStandard: fields.number({ label: 'Daily living, standard (per week)' }),
            dailyEnhanced: fields.number({ label: 'Daily living, enhanced (per week)' }),
            mobilityStandard: fields.number({ label: 'Mobility, standard (per week)' }),
            mobilityEnhanced: fields.number({ label: 'Mobility, enhanced (per week)' }),
          },
          { label: 'PIP' },
        ),
        aa: fields.object(
          {
            lower: fields.number({ label: 'Lower rate (per week)' }),
            higher: fields.number({ label: 'Higher rate (per week)' }),
          },
          { label: 'Attendance Allowance' },
        ),
        dla: fields.object(
          {
            careLowest: fields.number({ label: 'Care, lowest (per week)' }),
            careMiddle: fields.number({ label: 'Care, middle (per week)' }),
            careHighest: fields.number({ label: 'Care, highest (per week)' }),
            mobilityLower: fields.number({ label: 'Mobility, lower (per week)' }),
            mobilityHigher: fields.number({ label: 'Mobility, higher (per week)' }),
          },
          { label: 'DLA' },
        ),
      },
    }),
  },
});
