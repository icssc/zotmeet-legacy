/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/sign-in",
        destination: "/auth/google",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
