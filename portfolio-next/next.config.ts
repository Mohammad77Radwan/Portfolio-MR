import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
