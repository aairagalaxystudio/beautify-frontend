/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Remove powered by header
  poweredByHeader: false,

  // Ensure proper build on Vercel
  swcMinify: true,

  // Image config (safe default)
  images: {
    unoptimized: false,
  },

  // Prevent build worker crashes
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;