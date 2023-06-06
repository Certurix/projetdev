/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  /* Rewriting next rules*/
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/app/page.tsx",
      },
      {
        source: "/about",
        destination: "/app/about/page.tsx",
      },
    ];
  },
};

module.exports = nextConfig;