/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp)$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
