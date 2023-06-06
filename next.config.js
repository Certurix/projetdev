/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/app/page.tsx' },
      '/about': { page: '/app/about/page.tsx' },
    };
  },
};

module.exports = nextConfig;