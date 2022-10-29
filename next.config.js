const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  nextScriptWorkers: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['apiblog.oficinamecanicaonline.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apiblog.oficinamecanicaonline.com',
        port: '',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig