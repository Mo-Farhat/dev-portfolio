const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a static site suitable for GitHub Pages
  output: 'export',
  // Use the repo subpath in production for GitHub Pages
  basePath: isProd ? '/dev-portfolio' : '',
  assetPrefix: isProd ? '/dev-portfolio/' : '',
  // Helpful for static hosting of routes
  trailingSlash: true,
  // Make next/image compatible with static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
