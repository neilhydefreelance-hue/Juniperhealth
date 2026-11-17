import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;
export type TopicLink = { key: string; name: string; href: string };

/** Only read the collection once an article exists, to keep build logs quiet. */
const hasArticles = Object.keys(import.meta.glob('../content/articles/*.mdoc')).length > 0;

/** All articles, newest first. */
export async function allArticles(): Promise<Article[]> {
  if (!hasArticles) return [];
  return (await getCollection('articles')).sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}

/** Articles linked to a guide, for example kind "conditions" and hub "respiratory-and-allergy/asthma". */
export async function articlesFor(kind: string, hubId: string): Promise<Article[]> {
  const key = `${kind}/${hubId}`;
  return (await allArticles()).filter((a) => a.data.topics.includes(key));
}

/** Turns topic keys such as "benefits/pip" into names and links. Unknown keys are skipped. */
export async function topicLinks(keys: string[]): Promise<TopicLink[]> {
  const [conditions, benefits, support] = await Promise.all([getCollection('conditions'), getCollection('benefits'), getCollection('support')]);
  const find = (key: string): TopicLink | undefined => {
    const [kind, ...rest] = key.split('/');
    const id = rest.join('/');
    if (kind === 'conditions') {
      const e = conditions.find((c) => c.id === id);
      return e && { key, name: e.data.conditionName || e.data.title, href: `/conditions/${id}/` };
    }
    if (kind === 'benefits') {
      const e = benefits.find((c) => c.id === id);
      return e && { key, name: e.data.benefitName || e.data.navTitle || e.data.title, href: `/benefits/${id}/` };
    }
    if (kind === 'support') {
      const e = support.find((c) => c.id === id);
      return e && { key, name: e.data.navTitle || e.data.title, href: `/support/${id}/` };
    }
    return undefined;
  };
  return keys.map(find).filter((t): t is TopicLink => Boolean(t));
}

export const formatDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
