/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  serverExternalPackages: [],
  // Ensure the server binds to all interfaces
  serverRuntimeConfig: {
    hostname: '0.0.0.0',
  },
}

export default nextConfig
