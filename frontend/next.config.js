/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.adidas.com"],
  },
};

module.exports = nextConfig
