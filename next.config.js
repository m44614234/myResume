const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-resume-eight-peach.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*", 
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://my-resume-eight-peach.vercel.app", // یا * برای همه دامنه‌ها
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);



// const createNextIntlPlugin = require("next-intl/plugin");

// const withNextIntl = createNextIntlPlugin();

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "https://my-resume-eight-peach.vercel.app/" || "http://localhost:3000", // به جای **، دامنه خاصی را وارد کنید
//       },
//     ],
//   },
//   async headers() {
//     return [
//       {
//         source: "/:path*", 
//         headers: [
//           {
//             key: "Access-Control-Allow-Origin",
//             value: "https://my-resume-eight-peach.vercel.app/" || "http://localhost:3000",
//           },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET, POST, PUT, DELETE, OPTIONS",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value: "Content-Type, Authorization",
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = withNextIntl(nextConfig);


