/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    
    webpack(config, { dev }) {
      if (!dev) {
        config.devtool = 'source-map';
      }
      return config;
    },
  };
  
  export default nextConfig;
  