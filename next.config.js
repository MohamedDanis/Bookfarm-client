/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://assets.website-files.com","res.cloudinary.com","images.unsplash.com"],
},
experimental: {
},
}

module.exports = nextConfig
