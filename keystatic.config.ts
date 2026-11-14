/**
 * Keystatic editor setup.
 *
 * This file decides what you see at juniperhealth.info/keystatic: which kinds of page
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
  affiliate: wrapper({
    label: 'Affiliate product (Ad)',
    description: 'A product box clearly marked "Ad", with an affiliate link. Write one or two plain sentences inside. Never claim it treats or cures anything.',
    schema: {
      name: fields.text({ label: 'Product name', validation: { length: { min: 1 } } }),
      url: fields.url({ label: 'Affiliate link', validation: { isRequired: true } }),
      merchant: fields.text({ label: 'Shop name', defaultValue: 'Amazon' }),
    },
  }),
  adNotice: block({
    label: 'Advert notice',
    description: 'Put this near the top of any article with affiliate links. It explains the "Ad" labels.',
    schema: {},
  }),
  community: block({
    label: 'Join our community box',
    description: 'Shows our Facebook group and Discord, using the links in Business details.',
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
          { label: 'NHS health costs check', value: 'nhs' },
        ],
        defaultValue: 'pip',
      }),
    },
  }),
};

/* Boxes shared by every health and benefits page. */

/**
 * Every condition, benefit and support guide, for the "related guides" pickers.
 * Built from the content folders, so new guides appear here automatically.
 */
const titleCase = (slug: string) => slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
const guideOptions = (() => {
  const hubs = (files: Record<string, unknown>, kind: string, depth: number, label: string) =>
    Object.keys(files)
      .map((f) => f.replace(/^.*\/content\/[a-z]+\//, '').replace(/\.mdoc$/, ''))
      .filter((id) => id.split('/').length === depth)
      .map((id) => ({ label: `${label}: ${titleCase(id.split('/').pop() as string)}`, value: `${kind}/${id}` }));
  return [
    ...hubs(import.meta.glob('./src/content/conditions/**/*.mdoc'), 'conditions', 2, 'Condition'),
    ...hubs(import.meta.glob('./src/content/benefits/**/*.mdoc'), 'benefits', 1, 'Benefit'),
    ...hubs(import.meta.glob('./src/content/support/**/*.mdoc'), 'support', 1, 'Support'),
  ].sort((a, b) => a.label.localeCompare(b.label, 'en-GB'));
})();

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
      'Disability support': ['support'],
      'Other pages': ['pages'],
      'Affiliate products': ['products'],
      'Articles': ['articles'],
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
              'Start with the category, then the condition. A category page is just its name, for example "skin". A condition main page is "skin/eczema". A page inside it is "skin/eczema/treatment".',
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
            { label: 'Eye', value: 'eye' },
            { label: 'Bone', value: 'bone' },
            { label: 'Gut (digestion)', value: 'gut' },
            { label: 'Kidney', value: 'kidney' },
            { label: 'Hand (skin)', value: 'skin' },
            { label: 'Moon (sleep)', value: 'moon' },
            { label: 'Flower (allergy)', value: 'flower' },
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
    support: collection({
      label: 'Disability support pages',
      path: 'src/content/support/**',
      slugField: 'title',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'lastReviewed'],
      schema: {
        title: fields.slug({
          name: { label: 'Page title' },
          slug: {
            label: 'Web address',
            description: 'For the main page of a topic use its short name, for example "travel". For a page inside it, for example "travel/blue-badge".',
          },
        }),
        ...sharedPageFields,
        cardIcon: fields.select({
          label: 'Card icon',
          options: [
            { label: 'Gift', value: 'gift' },
            { label: 'Pound sign', value: 'pound' },
            { label: 'Document', value: 'document' },
            { label: 'Heart', value: 'heart' },
            { label: 'People', value: 'people' },
            { label: 'Body', value: 'body' },
            { label: 'Calculator', value: 'calculator' },
            { label: 'Pill', value: 'pill' },
          ],
          defaultValue: 'gift',
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
    articles: collection({
      label: 'Articles',
      path: 'src/content/articles/*',
      slugField: 'title',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'published'],
      schema: {
        title: fields.slug({ name: { label: 'Article title' }, slug: { label: 'Web address', description: 'The end of the link, for example "aids-that-can-help-with-asthma".' } }),
        description: sharedPageFields.description,
        summary: sharedPageFields.summary,
        published: fields.date({ label: 'Date published', validation: { isRequired: true } }),
        lastReviewed: fields.date({ label: 'Last checked for accuracy', validation: { isRequired: true } }),
        topics: fields.multiselect({
          label: 'Related guides',
          description: 'The article will be listed on these condition, benefit or support guides.',
          options: guideOptions,
          defaultValue: [],
        }),
        containsAds: fields.checkbox({
          label: 'This article contains affiliate links (ads)',
          description: 'Tick this if you add any Affiliate product boxes, and add the Advert notice near the top.',
          defaultValue: false,
        }),
        sources: sharedPageFields.sources,
        faqs: sharedPageFields.faqs,
        body: fields.markdoc({ label: 'Article', components: contentComponents }),
      },
    }),
    medicines: collection({
      label: 'Medicines',
      path: 'src/content/medicines/*',
      slugField: 'name',
      format: { data: 'yaml' },
      columns: ['name', 'medicineType'],
      schema: {
        name: fields.slug({ name: { label: 'Medicine name' }, slug: { label: 'Web address' } }),
        alsoKnownAs: fields.array(fields.text({ label: 'Name' }), { label: 'Brand and other names', itemLabel: (p) => p.value }),
        medicineType: fields.text({ label: 'Type of medicine', description: 'For example "SSRI antidepressant".' }),
        forms: fields.array(fields.text({ label: 'Form' }), { label: 'Comes as', itemLabel: (p) => p.value }),
        availability: fields.select({
          label: 'How you get it',
          options: [
            { label: 'Prescription only', value: 'prescription' },
            { label: 'Pharmacy (some forms)', value: 'pharmacy' },
            { label: 'Shops and pharmacies (some forms)', value: 'shop' },
            { label: 'Hospital or specialist team', value: 'hospital' },
            { label: 'Started by a specialist', value: 'specialist' },
          ],
          defaultValue: 'prescription',
        }),
        summary: fields.text({ label: 'Opening summary', multiline: true }),
        conditions: fields.multiselect({
          label: 'Show on these condition guides',
          options: guideOptions
            .filter((o) => o.value.startsWith('conditions/') && o.value.split('/').length === 3)
            .map((o) => ({ label: o.label.replace('Condition: ', ''), value: o.value.replace('conditions/', '') })),
          defaultValue: [],
        }),
        uses: fields.array(fields.text({ label: 'Use', multiline: true }), { label: 'What it is used for (licensed uses)', itemLabel: (p) => p.value }),
        offLabel: fields.array(fields.text({ label: 'Use', multiline: true }), { label: 'Off-label uses', itemLabel: (p) => p.value }),
        howItWorks: fields.text({ label: 'How it works', multiline: true }),
        sideEffectsCommon: fields.array(fields.text({ label: 'Side effect' }), { label: 'Common side effects', itemLabel: (p) => p.value }),
        sideEffectsSerious: fields.array(fields.text({ label: 'Side effect', multiline: true }), { label: 'Serious side effects (call 111)', itemLabel: (p) => p.value }),
        stopping: fields.text({ label: 'Stopping and withdrawal', multiline: true }),
        stoppingRisk: fields.select({
          label: 'Risk of stopping suddenly',
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
          ],
          defaultValue: 'medium',
        }),
        warnings: fields.array(fields.text({ label: 'Warning', multiline: true }), { label: 'Important safety information', itemLabel: (p) => p.value }),
        nhsSlug: fields.text({ label: 'NHS website address (end part only)', description: 'For example "sertraline". Leave empty if the NHS has no page.' }),
        bnfSlug: fields.text({ label: 'BNF address (end part only)', description: 'Leave empty if it matches the web address.' }),
        lastReviewed: fields.date({ label: 'Last checked for accuracy', validation: { isRequired: true } }),
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
          options: guideOptions
            .filter((o) => o.value.startsWith('conditions/'))
            .map((o) => ({ label: o.label.replace('Condition: ', ''), value: o.value.split('/').pop() as string })),
          defaultValue: [],
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
        facebookGroupUrl: fields.url({
          label: 'Facebook community group link',
          description: 'Shown in the footer. Leave empty to hide it.',
        }),
        discordUrl: fields.url({
          label: 'Discord invite link',
          description: 'Use an invite that never expires. Leave empty to hide Discord across the site.',
        }),
        icoNumber: fields.text({ label: 'ICO registration number (if registered)' }),
        analyticsToken: fields.text({
          label: 'Cloudflare Web Analytics token',
          description: 'Leave empty to switch analytics off. The token is shown in the Cloudflare dashboard under Web Analytics.',
        }),
        gaMeasurementId: fields.text({
          label: 'Google Analytics measurement ID',
          description: 'Starts with G-. Google Analytics only loads after a visitor accepts statistics cookies. Leave empty to switch it off.',
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
