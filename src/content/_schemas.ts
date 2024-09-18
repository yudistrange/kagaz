import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["posts"]),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export const tilSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).default(["til"]),
    description: z.string(),
  })
  .strict();

export type TilFrontmatter = z.infer<typeof tilSchema>;

export const bookSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).default(["books"]),
    description: z.string(),
    bookAuthor: z.string(),
  })
  .strict();

export type BookFrontmatter = z.infer<typeof bookSchema>;
