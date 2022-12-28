// ----------------------------------------------------------------------

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    DEV_API: 'http://localhost:7777',
    PRODUCTION_API: 'https://transcendent-kataifi-f045cc.netlify.app/',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
};

export default nextConfig;
