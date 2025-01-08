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
          height={220}
          width={165}
          alt="Profile"
        />
        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to Whiteboard Wisdom! This blog is home to my ever-evolving
          life lessons that can easily read, shared, and wiped away to make
          space for new learnings. Feel free to snoop around and see if anything
          resonates with your life journey. Send me an{" "}
          <Link href={"mailto:mywisdomboard@gmail.com"}>email</Link> if you have
          any to share 📧
        </p>
        <p></p>
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
