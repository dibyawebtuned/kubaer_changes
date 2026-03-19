// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         formats: ["image/avif", "image/webp"],
//         minimumCacheTTL: 60,
//     },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: '/eventocsn',
};

export default nextConfig;
