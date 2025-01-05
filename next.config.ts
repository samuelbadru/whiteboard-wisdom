import { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { SITE_DOMAIN } from "./lib/constants";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mywisdomboard.com",
          },
        ],
        destination: `${SITE_DOMAIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
