/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, {}) {
    return {
      '/': { page: '/' },
    };
  },
  images: {
    loader: 'akamai',
    path: '',
  }
};

module.exports = nextConfig;
