import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      { source: '/jobs/:id(\\d+)', destination: '/jobs', permanent: true },
      { source: '/internships/:id(\\d+)', destination: '/internships', permanent: true },
      { source: '/scholarships/:id(\\d+)', destination: '/scholarships', permanent: true },
      { source: '/govt-jobs/:id(\\d+)', destination: '/govt-jobs', permanent: true },
    ];
  },
  // Cache optimization (only for production)
  ...(process.env.NODE_ENV === 'production' && {
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
  }),
};

export default nextConfig;
