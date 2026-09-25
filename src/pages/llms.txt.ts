/**
 * llms.txt: a plain summary of the site for AI search tools and assistants.
 * See https://llmstxt.org. Built automatically from the content collections.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, TOOLS } from '../data/site';

export const prerender = true;

export const GET: APIRoute = async () => {
  const [conditions, benefits, pages] = await Promise.all([getCollection('conditions'), getCollection('benefits'), getCollection('pages')]);
  const line = (title: string, path: string, desc: string) => `- [${title}](${SITE.url}${path}): ${desc.replace(/\s+/g, ' ').trim()}`;
  const byId = <T extends { id: string }>(a: T, b: T) => a.id.localeCompare(b.id);
  const body = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description} Juniper Health is independent and is not part of the DWP or the NHS. Information is general, not advice. Benefit rates shown are for 2026 to 2027.`,
    '',
    '## Health conditions',
    ...conditions.sort(byId).map((e) => line(e.data.title, `/conditions/${e.id}/`, e.data.description)),
    '',
    '## Disability benefits (England and Wales)',
    ...benefits.sort(byId).map((e) => line(e.data.title, `/benefits/${e.id}/`, e.data.description)),
    '',
    '## Free self-checks (run entirely in the browser, no data collected)',
    ...Object.values(TOOLS).map((t) => line(t.name, t.href, t.blurb)),
    '',
    '## About and policies',
    ...pages.sort(byId).map((e) => line(e.data.title, `/${e.id}/`, e.data.description)),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
