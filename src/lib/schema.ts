/**
 * Structured data (JSON-LD) helpers. Every page gets a single @graph so search
 * engines and AI tools can see who publishes the site, who wrote each page and
 * where the page sits in the site.
 */
import { SITE } from '../data/site';

export type Crumb = { name: string; href: string };
type Thing = Record<string, unknown>;

export const abs = (path: string) => new URL(path, SITE.url).href;

export const ORG_ID = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;
export const AUTHOR_ID = `${SITE.url}${SITE.authorSlug}#person`;

export function organization(): Thing {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: { '@type': 'ImageObject', url: abs(SITE.logo), width: 512, height: 512 },
    email: SITE.email,
    description: SITE.description,
    areaServed: [
      { '@type': 'Country', name: 'England' },
      { '@type': 'Country', name: 'Wales' },
    ],
    founder: { '@id': AUTHOR_ID },
    publishingPrinciples: abs('/about/editorial-policy/'),
    correctionsPolicy: abs('/about/editorial-policy/#corrections'),
    ethicsPolicy: abs('/about/editorial-policy/'),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.email,
      availableLanguage: 'English',
      url: abs('/contact/'),
    },
  };
}

export function website(): Thing {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE.name,
    alternateName: 'Juniper Health UK',
    url: `${SITE.url}/`,
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
    description: SITE.description,
  };
}

export function person(): Thing {
  return {
    '@type': 'Person',
    '@id': AUTHOR_ID,
    name: SITE.ownerName,
    url: abs(SITE.authorSlug),
    jobTitle: 'Founder and editor',
    worksFor: { '@id': ORG_ID },
    knowsAbout: ['Personal Independence Payment', 'Attendance Allowance', 'Disability Living Allowance', 'Fibromyalgia'],
  };
}

export function breadcrumbList(crumbs: Crumb[]): Thing {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(crumbs[crumbs.length - 1]?.href ?? '/')}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function faqPage(url: string, faqs: { question: string; answer: string }[]): Thing {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(url)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export const iso = (d: Date) => d.toISOString().slice(0, 10);
