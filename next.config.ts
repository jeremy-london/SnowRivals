import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "",
	},
	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
	},
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
	trailingSlash: true,
};

export default nextConfig;
