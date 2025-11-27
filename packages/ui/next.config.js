/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  transpilePackages: ['@repo/ui'],
}

module.exports = nextConfig;
