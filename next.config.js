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
        destination: "/app/page",
      },
      {
        source: "/about",
        destination: "/app/about/page",
      },
    ];
  },
};

module.exports = nextConfig;