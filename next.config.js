const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // به جای **، دامنه خاصی را وارد کنید
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // همه مسیرها
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // یا آدرس خاصی که می‌خواهید اجازه دهید
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

// module.exports = withNextIntl(nextConfig);