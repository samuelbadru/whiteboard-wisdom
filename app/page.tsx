// import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "./layout.module.css";
import Image from "next/image";
import { siteTitle } from "../lib/constants";
// import RootLayout from "./layout";

async function generateAllPostData() {
  // Get external data from the file system, API, DB, etc.
  return getSortedPostsData();
}

export default async function Home() {
  const allPostData = await generateAllPostData();
  return (
    <>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my digtal diary! I&apos;m a Scientist turned Software
          Engineer by day, and an extrovert turned introvert by night.{" "}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
