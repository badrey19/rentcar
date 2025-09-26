import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export', // Next.js 14+ untuk export static
  // basePath: '/rentcar', // ganti sesuai repo
  // assetPrefix: '/rentcar/',
  images: {
    unoptimized: true, // matikan Image Optimization API
  },
  reactStrictMode: true,
};

export default nextConfig;
