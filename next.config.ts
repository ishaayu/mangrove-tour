/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mangrove-tour",
  assetPrefix: "/mangrove-tour/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;