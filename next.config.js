/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

// @で読み込めるようにするやつ
const path = require('path')
module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}