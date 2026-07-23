import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static image exports on GitHub Pages
  },
};

export default nextConfig;