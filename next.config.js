/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cf.shopee.vn"],
	},
	// swcMinify: true,
	// experimental: {
	// 	forceSwcTransforms: true,
	// },
};

module.exports = nextConfig;
