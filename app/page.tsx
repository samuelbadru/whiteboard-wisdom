import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "./layout.module.css";
import Image from "next/image";
import { siteTitle } from "../lib/constants";

async function generateAllPostData() {
  return getSortedPostsData();
}

export default async function Home() {
  const allPostData = await generateAllPostData();
  return (
    <>
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
          Welcome to my digtal diary! Whiteboard wisdom is a home for my
          continually evolving life learnings. Feel free to snoop around and see
          if anything resonates with your life journey. Send me an{" "}
          <Link href={"mailto:mywisdomboard@gmail.com"}>email</Link> if you want
          to chat.
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
