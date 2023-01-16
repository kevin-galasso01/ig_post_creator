/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: 'https',
    hostname: ["oaidalleapiprodscus.blob.core.windows.net"]
  },
}

module.exports = nextConfig
