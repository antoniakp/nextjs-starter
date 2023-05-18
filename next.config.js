/**
 * @type {import('next').NextConfig}
 **/

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    // to prevent MSW error [ERR_UNSUPPORTED_DIR_IMPORT] -> https://github.com/vercel/next.js/issues/40904
    // it shouldn't be necessary after releasing this PR -> https://github.com/mswjs/msw/pull/1399
    esmExternals: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
