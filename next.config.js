/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	basePath: "/smiles-in-stain",
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
