import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),
  turbopack: { root: __dirname },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.amcorn.com" }],
        destination: "https://amcorn.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "index, follow" }],
      },
    ];
  },
};

export default nextConfig;
