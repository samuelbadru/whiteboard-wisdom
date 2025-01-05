// import Head from "next/head";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";
import parse from "html-react-parser";
import RootLayout from "../../layout";

// Static Site Generation with Data and Dynamic Routes

// Used by the Post component to get the data for each blog post
export async function generatePostData(params: { id: string }) {
  return (await getPostData(params.id)) as PostData;
}

// Return a list of possible [id] values for dynamic routing to the Post component
export async function generateStaticParams() {
  return getAllPostIds();
}

type PostProps = {
  params: { id: string };
};

// Uses what's returned from generatePostData to render the blog post page
export default async function Post({ params }: PostProps) {
  const postData: PostData = await generatePostData(params);
  return (
    <RootLayout>
      {/* <Head>
        <title>{postData.title}</title>
      </Head> */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div>{parse(postData.contentHtml || "")}</div>
      </article>
    </RootLayout>
  );
}
