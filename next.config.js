/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

module.exports = nextConfig;
