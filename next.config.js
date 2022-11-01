const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		JWT_SECRET: process.env.JWT_SECRET,
		BASE_URL: process.env.BASE_URL,
	},
};

module.exports = nextConfig;
