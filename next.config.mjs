/** @type {import('next').NextConfig} */

import dotenv from "dotenv";

dotenv.config();

const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  basePath: process.env.BASE_PATH || "",
  trailingSlash: true,
};

export default nextConfig;
