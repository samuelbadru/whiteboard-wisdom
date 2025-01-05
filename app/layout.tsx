import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/global.css";
import { Metadata } from "next";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import { SITE_DOMAIN, siteDescription, siteTitle } from "../lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  alternates: {
    canonical: "./",
  },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <main>{children}</main>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
