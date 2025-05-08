import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use these settings for production builds
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',                  // Static export
    basePath: '/d13-all-SimWork',      // MUST match repo name
    assetPrefix: '/d13-all-SimWork/',  // For correct asset paths
  } : {}),
  trailingSlash: true,                 // Better routing
  images: { unoptimized: true },       // Required for static
  eslint: {
    ignoreDuringBuilds: true,          // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,           // Ignore TypeScript errors during build
  },
};

export default nextConfig;
