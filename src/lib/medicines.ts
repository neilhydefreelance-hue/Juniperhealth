import { getCollection, type CollectionEntry } from 'astro:content';
import { aToZ } from './topics';

export type Medicine = CollectionEntry<'medicines'>;

/** Only read the collection once a medicine exists, to keep build logs quiet. */
const hasMedicines = Object.keys(import.meta.glob('../content/medicines/*.yaml')).length > 0;

/** All medicines, A to Z. */
export async function allMedicines(): Promise<Medicine[]> {
  if (!hasMedicines) return [];
  return (await getCollection('medicines')).sort((a, b) => aToZ(a.data.name, b.data.name));
}

/** Medicines linked to a condition guide, for example "mental-health/depression". */
export async function medicinesFor(conditionId: string): Promise<Medicine[]> {
  return (await allMedicines()).filter((m) => m.data.conditions.includes(conditionId));
}

export const AVAILABILITY: Record<Medicine['data']['availability'], string> = {
  prescription: 'Prescription only',
  pharmacy: 'Some forms from a pharmacy without a prescription',
  shop: 'Some forms from shops and pharmacies without a prescription',
  hospital: 'Given in hospital or by a specialist team',
  specialist: 'Started by a specialist, then sometimes prescribed by a GP',
};

/** Links to the official NHS and BNF pages for a medicine. */
export function officialSources(m: Medicine): { label: string; url: string }[] {
  const out: { label: string; url: string }[] = [];
  if (m.data.nhsSlug) out.push({ label: `NHS, ${m.data.name}`, url: `https://www.nhs.uk/medicines/${m.data.nhsSlug}/` });
  out.push({ label: `BNF (NICE), ${m.data.name}`, url: `https://bnf.nice.org.uk/drugs/${m.data.bnfSlug || m.id}/` });
  out.push({ label: 'Electronic Medicines Compendium (patient leaflets)', url: `https://www.medicines.org.uk/emc/search?q=${encodeURIComponent(m.data.name)}` });
  return out;
}
