module.exports = {
  experimental: {
    staleTimes: {
      dynamic: 3,
      static: 180,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};
