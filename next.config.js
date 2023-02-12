/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions:['page.jsx','page.js'],
  compiler:{
    styledComponents: true
  }
}

module.exports = nextConfig
