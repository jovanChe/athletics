/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  transpilePackages: ['@repo/ui'],
  // Enable CSS Modules
  cssModules: true,
}

module.exports = nextConfig;
