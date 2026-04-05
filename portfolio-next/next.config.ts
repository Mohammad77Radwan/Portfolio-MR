import type { NextConfig } from "next";


const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopack: {
      root: path.resolve(__dirname),
    },
  },
};

export default nextConfig;
