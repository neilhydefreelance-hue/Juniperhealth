import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const source = z.object({ label: z.string(), url: z.url() });
const faq = z.object({ question: z.string(), answer: z.string() });

const topicPage = z.object({
  title: z.string(),
  navTitle: z.string().default(''),
  description: z.string(),
  summary: z.string().default(''),
  order: z.number().default(10),
  lastReviewed: z.coerce.date(),
  sources: z.array(source).default([]),
  faqs: z.array(faq).default([]),
});

const conditions = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/conditions' }),
  schema: topicPage.extend({
    conditionName: z.string().default(''),
    alternateNames: z.array(z.string()).default([]),
    icd10: z.string().default(''),
    cardIcon: z.enum(['leaf', 'heart', 'brain', 'body', 'lungs', 'ear', 'joint', 'drop', 'pulse', 'thyroid', 'shield', 'people', 'wave', 'cup', 'pill', 'loop', 'bolt', 'eye', 'bone', 'gut', 'kidney', 'skin', 'moon', 'flower']).default('leaf'),
  }),
});

const benefits = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/benefits' }),
  schema: topicPage.extend({
    benefitName: z.string().default(''),
    showRates: z.enum(['none', 'pip', 'aa', 'dla']).default('none'),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().default(''),
    lastUpdated: z.coerce.date(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    merchant: z.string(),
    url: z.url(),
    conditions: z.array(z.string()).default([]),
    active: z.boolean().default(true),
  }),
});

const support = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/support' }),
  schema: topicPage.extend({
    cardIcon: z.enum(['leaf', 'heart', 'brain', 'body', 'lungs', 'ear', 'joint', 'drop', 'pulse', 'thyroid', 'shield', 'people', 'wave', 'cup', 'pill', 'loop', 'bolt', 'pound', 'gift', 'document', 'calculator']).default('gift'),
  }),
});

export const collections = { conditions, benefits, support, pages, products };
