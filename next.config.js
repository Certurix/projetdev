const path = require('path');

const nextConfig = {
  pageExtensions: ['js', 'tsx', 'ts'],
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/freenitro',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'app');
    return config;
  },
};

module.exports = nextConfig;