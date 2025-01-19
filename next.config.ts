import { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { SITE_DOMAIN } from "./lib/constants";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mywisdomboard.com",
          },
        ],
        destination: `${SITE_DOMAIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withAnalyzer(withMDX(nextConfig));
