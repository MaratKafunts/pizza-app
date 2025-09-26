// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "pizza-app";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "export",
	trailingSlash: true, // Важно для GitHub Pages
	images: { unoptimized: true },
	basePath: isProd ? `/${repo}` : "",
	assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
