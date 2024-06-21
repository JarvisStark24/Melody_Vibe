/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ugibffaafotjomcayxna.supabase.co',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  