/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: 'manual',
  },
  sassOptions: {
    additionalData: `
          @import "@Styles/_tool.scss";
      `,
  },
};

module.exports = nextConfig;
