/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    // fix "Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema."
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};