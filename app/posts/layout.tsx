import Image from "next/image";
import styles from "../layout.module.css";
import { siteTitle } from "../../lib/constants";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { ReactNode } from "react";

export default async function PostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={220}
            width={165}
            alt="Profile"
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {siteTitle}
          </Link>
        </h2>
      </header>
      <article>
        <div>{children}</div>
      </article>
      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
