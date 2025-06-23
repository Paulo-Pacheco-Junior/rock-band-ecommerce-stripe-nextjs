/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bananabipolar.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
