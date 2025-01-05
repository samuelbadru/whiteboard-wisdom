import { NextResponse } from "next/server";
import { getAllPostIds } from "../../lib/posts";

//pages/sitemap.xml.js
const DOMAIN = "https://mywisdomboard.com";

function generateSiteMap(postIds: { id: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${DOMAIN}</loc>
      </url>
     ${postIds
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${DOMAIN}/posts/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  // We make an API call to gather the URLs for our site
  const posts = getAllPostIds();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  // We return the sitemap as a response
  return NextResponse.json(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
