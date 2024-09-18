import type { CollectionEntry } from "astro:content";
import slugify from "@utils/slugify";

const getPostLink = (post: CollectionEntry<"book" | "til" | "blog">) => {
  let type = "posts";

  switch (post?.collection) {
    case "til":
      type = "til";
      break;
    case "book":
      type = "books";
      break;
    case "blog":
    default:
      type = "posts";
      break;
  }

  const link = `/${type}/${slugify(post?.data)}`;
  return link;
};

export default getPostLink;
