import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use these settings for production builds
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',                  // Static export
    basePath: '/i5',                   // MUST match repo name
    assetPrefix: '/i5/',               // For correct asset paths
  } : {}),
  trailingSlash: true,                 // Better routing
  images: { unoptimized: true },       // Required for static
};

export default nextConfig;
