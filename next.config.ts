import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  async redirects() {
    return [
      {
        source: "/catalog",
        destination: "/catalog/flowers",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
