const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['sub.id'],

  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/design-system')],
  },
}

module.exports = nextConfig
