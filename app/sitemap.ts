import { MetadataRoute } from "next";
import { getAllPostIds } from "../lib/posts";
import { SITE_DOMAIN } from "../lib/constants";

function generateSiteMap(posts: { id: string }[]) {
  return [
    { url: SITE_DOMAIN },
    ...posts.map(({ id }) => ({
      url: `${SITE_DOMAIN}/posts/${id}`,
    })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostIds();
  return generateSiteMap(posts);
}
