/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable source maps in production
    productionBrowserSourceMaps: true,
    
    // Modify webpack configuration
    webpack(config, { dev }) {
      if (!dev) {
        config.devtool = 'source-map';  // Ensure source maps are generated in production
      }
      return config;
    },
  };
  
  export default nextConfig;
  