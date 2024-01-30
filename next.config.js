/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, './src/styles')],
    prependData: `
    @use "variables" as *;`
  },
};

module.exports = nextConfig
