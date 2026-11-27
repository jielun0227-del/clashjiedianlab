import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commonSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  lastmod: z.coerce.date().optional(),
  draft: z.boolean().optional(),
  slug: z.string().optional(),
  section: z.string().optional(),
  sectionIndex: z.boolean().optional(),
  aliases: z.array(z.string()).optional(),
  categories: z.union([z.array(z.string()), z.string()]).optional(),
  tags: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  type: z.string().optional(),
  tested: z.string().optional(),
  rating: z.union([z.string(), z.number()]).optional(),
  product: z.string().optional()
}).passthrough();

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: commonSchema
});

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wiki' }),
  schema: commonSchema
});

const compare = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/compare' }),
  schema: commonSchema
});

export const collections = { blog, wiki, compare };
