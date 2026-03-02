/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mangrove-tour",    // NAMA repo awak
  assetPrefix: "/mangrove-tour/", // penting untuk CSS & gambar
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;