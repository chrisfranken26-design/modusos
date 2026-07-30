/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  eslint: {
    dirs: ['app', 'components', 'lib']
  }
}

module.exports = nextConfig
