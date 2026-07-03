/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/CV-Dominik-Pazurek.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
