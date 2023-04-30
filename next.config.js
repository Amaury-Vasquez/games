/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgur.com', 'i.imgur.com', 'localhost:3000'],
  },
};

module.exports = nextConfig;
