import fs from "fs";
import path from "path";
import { readdir } from "fs/promises";
import { PostData } from "../types";

const postsDirectory = path.join(process.cwd(), "app/posts");

export async function getSortedPostsData(): Promise<PostData[]> {
  const dirNames = (
    await readdir("./app/posts", {
      withFileTypes: true,
    })
  ).filter((dirent) => dirent.isDirectory());

  const allPostsData = await Promise.all(
    dirNames.map(async ({ name }) => {
      const { metadata } = await import(`/app/posts/${name}/page.mdx`);
      return {
        id: name,
        ...metadata,
      } as PostData;
    })
  );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName !== "layout.tsx")
    .map((fileName) => ({
      id: fileName.replace(/\.md$/, ""),
    }));
}
