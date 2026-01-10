import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
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
};

export default nextConfig;
