import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import parse from "html-react-parser";

// Static Site Generation with Data and Dynamic Routes

// Return a list of possible [id] values for dynamic routing
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Uses what's returned from getStaticPaths to get the data for each blog post
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

type PostProps = {
  postData: PostData;
};

// Uses what's returned from getStaticProps to render the blog post page
export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div>{parse(postData.contentHtml)}</div>
      </article>
    </Layout>
  );
}
