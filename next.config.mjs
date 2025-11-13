/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 This makes Netlify/Next.js ignore TS build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 This ignores ESLint errors
  },
};

module.exports = nextConfig;
