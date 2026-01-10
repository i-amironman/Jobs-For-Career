import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Remove TypeScript error ignoring for better type safety
  typescript: {
    ignoreBuildErrors: false,
  },
  // Remove ESLint error ignoring for better code quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Performance optimizations
  // experimental: {
  //   optimizeCss: true,
  // },
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
