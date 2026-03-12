import type { NextConfig } from "next";
const withNextIntl = require('next-intl/plugin')();

const nextConfig: NextConfig = {
  /* Configurações de SAE - Sistemas Autônomos de Evolução */
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com', // Para fotos e avatares
      },
    ],
  },
  // O withNextIntl envolve a configuração para habilitar o suporte i18n
};

export default withNextIntl(nextConfig);
