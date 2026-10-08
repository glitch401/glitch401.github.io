import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

export const readingMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 230));

export const fmtDate = (d: Date) => {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = d.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
  return `${day} ${month} ${d.getUTCFullYear()}`;
};

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const tagCounts = (posts: Post[]) => {
  const m = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) m.set(t, (m.get(t) ?? 0) + 1);
  return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};
