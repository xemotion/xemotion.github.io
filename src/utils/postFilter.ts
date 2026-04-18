import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // Dev: show all posts including drafts so you can preview while writing
  if (import.meta.env.DEV) return true;

  // Prod: hide drafts and scheduled posts
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && isPublishTimePassed;
};

export default postFilter;
