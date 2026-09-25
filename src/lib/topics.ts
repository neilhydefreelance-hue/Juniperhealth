import { getCollection, type CollectionEntry } from 'astro:content';

type Kind = 'conditions' | 'benefits';
type Entry = CollectionEntry<'conditions'> | CollectionEntry<'benefits'>;

/** The main page of a topic has a one-part id ("fibromyalgia"); pages inside it have two ("fibromyalgia/symptoms"). */
export const hubId = (id: string) => id.split('/')[0];

export async function topicPaths(kind: Kind) {
  const all = (await getCollection(kind)) as Entry[];
  return all.map((entry) => {
    const hub = all.find((e) => e.id === hubId(entry.id));
    if (!hub) throw new Error(`"${entry.id}" has no main page. Create "${hubId(entry.id)}" first.`);
    const pages = all
      .filter((e) => hubId(e.id) === hub.id)
      .sort((a, b) => (a.id === hub.id ? -1 : b.id === hub.id ? 1 : a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)));
    return { params: { slug: entry.id }, props: { entry, hub, pages } };
  });
}

export async function hubs<K extends Kind>(kind: K): Promise<CollectionEntry<K>[]> {
  const all = (await getCollection(kind)) as CollectionEntry<K>[];
  return all.filter((e) => !e.id.includes('/')).sort((a, b) => a.data.order - b.data.order);
}
