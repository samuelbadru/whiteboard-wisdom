import { ReactNode } from "react";
import Image from "next/image";
import styles from "../../layout.module.css";
import { siteTitle } from "../../../lib/constants";
import Link from "next/link";
import utilStyles from "../../../styles/utils.module.css";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {siteTitle}
          </Link>
        </h2>
      </header>
      {children}
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
