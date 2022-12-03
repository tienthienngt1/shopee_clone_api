/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cf.shopee.vn"],
	},
	experimental: {
		forceSwcTransforms: true,
	},
};

module.exports = nextConfig;
