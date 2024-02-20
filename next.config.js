/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
          @import "@Styles/_tool.scss";
      `,
  },
};

module.exports = nextConfig;
