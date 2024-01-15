/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "scontent-sjc3-1.cdninstagram.com",
        port: "",
        pathname: "/v/**",
      },
    ],
  },
};

module.exports = nextConfig;
