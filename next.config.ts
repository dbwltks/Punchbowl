import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24, // 1일
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
