module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['child_process'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false }
    return config
  }
}