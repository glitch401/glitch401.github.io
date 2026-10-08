import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    favourite: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    github: z.string().optional(),
    external: z.string().optional(),
    featured: z.boolean().default(false),
    started: z.string().optional(),
    tech: z.array(z.string()).default([]),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    range: z.string(),
    url: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { writing, projects, jobs };
