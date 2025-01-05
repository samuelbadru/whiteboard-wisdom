import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/global.css";
import { Metadata } from "next";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { ReactNode } from "react";

export const siteTitle = "Whiteboard Wisdom";
const siteDescription =
  "Whiteboard Wisdom is a blog that leaves a breadcrumb trail of life lessons for you to either learn from or laugh at. Enjoy my modern proverbs!";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteTitle,
    images: `https://og-image.vercel.app/${encodeURI(
      siteTitle
    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
  },
  twitter: {
    card: "summary_large_image",
  },
};

type RootLayoutProps = {
  children: ReactNode;
  home?: boolean;
};

export default function RootLayout({ children, home }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt=""
                />
                <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
              </>
            ) : (
              <>
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
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
