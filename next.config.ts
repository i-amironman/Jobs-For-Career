import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Remove TypeScript error ignoring for better type safety
  typescript: {
    ignoreBuildErrors: false,
  },
  // Cache optimization
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/illustrations/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
