/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk/client-ses"],
  },
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
