// ----------------------------------------------------------------------

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    DEV_API: 'http://localhost:7777',
    PRODUCTION_API: 'https://energace.net',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
};

export default nextConfig;
