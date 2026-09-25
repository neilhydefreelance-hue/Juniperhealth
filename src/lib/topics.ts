import { getCollection, type CollectionEntry } from 'astro:content';

type Kind = 'conditions' | 'benefits';
type Entry = CollectionEntry<'conditions'> | CollectionEntry<'benefits'>;

/**
 * How many parts the web address of a topic's main page has.
 *   Conditions sit inside a category:  physical / fibromyalgia / symptoms
 *   Benefits do not:                   pip / how-to-claim
 */
const HUB_DEPTH: Record<Kind, number> = { conditions: 2, benefits: 1 };

const depth = (id: string) => id.split('/').length;
export const hubId = (kind: Kind, id: string) => id.split('/').slice(0, HUB_DEPTH[kind]).join('/');
/** The last part of an address, for example "fibromyalgia". */
export const shortId = (id: string) => id.split('/').pop() ?? id;

const conditionName = (e: Entry) => (e.data as CollectionEntry<'conditions'>['data']).conditionName || e.data.title;

export async function topicPaths(kind: Kind) {
  const all = (await getCollection(kind)) as Entry[];
  return all
    .filter((e) => depth(e.id) >= HUB_DEPTH[kind])
    .map((entry) => {
      const hub = all.find((e) => e.id === hubId(kind, entry.id));
      if (!hub) throw new Error(`"${entry.id}" has no main page. Create "${hubId(kind, entry.id)}" first.`);
      const pages = all
        .filter((e) => depth(e.id) >= HUB_DEPTH[kind] && hubId(kind, e.id) === hub.id)
        .sort((a, b) => (a.id === hub.id ? -1 : b.id === hub.id ? 1 : a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)));
      let category: CollectionEntry<'conditions'> | undefined;
      if (kind === 'conditions') {
        const catId = entry.id.split('/')[0];
        category = all.find((e) => e.id === catId) as CollectionEntry<'conditions'> | undefined;
        if (!category) throw new Error(`"${entry.id}" is not inside a category. Create the "${catId}" category page first.`);
      }
      return { params: { slug: entry.id }, props: { entry, hub, pages, category } };
    });
}

/** Condition categories, such as "physical". They have one-part addresses. */
export async function categories(): Promise<CollectionEntry<'conditions'>[]> {
  const all = await getCollection('conditions');
  return all.filter((e) => depth(e.id) === 1).sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** The main page of every topic, A to Z for conditions. Optionally only one condition category. */
export async function hubs<K extends Kind>(kind: K, category?: string): Promise<CollectionEntry<K>[]> {
  const all = (await getCollection(kind)) as CollectionEntry<K>[];
  return all
    .filter((e) => depth(e.id) === HUB_DEPTH[kind] && (!category || e.id.startsWith(`${category}/`)))
    .sort((a, b) => (kind === 'conditions' ? conditionName(a).localeCompare(conditionName(b)) : a.data.order - b.data.order));
}
