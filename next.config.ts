import type { NextConfig } from "next";

const repo = "pizza-app"; // название репозитория

const nextConfig: NextConfig = {
	output: "export", // обязательный экспорт для GH Pages
	basePath: `/${repo}`, // чтобы роуты работали
	assetPrefix: `/${repo}/`, // чтобы стили, скрипты, картинки искались в подпапке
	images: { unoptimized: true }, // для next/image на статике
};

export default nextConfig;
