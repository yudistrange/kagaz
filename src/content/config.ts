import { defineCollection } from "astro:content";
import { blogSchema, bookSchema, tilSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const til = defineCollection({
  schema: tilSchema,
});

const book = defineCollection({
  schema: bookSchema,
});

export const collections = { blog, til, book };
