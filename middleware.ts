import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

/**
 * Middleware de Internacionalização - Portal Arcano 2.0
 * Gerencia o redirecionamento automático baseado no idioma do navegador.
 */
export default createMiddleware({
  // Idioma padrão caso a detecção falhe
  defaultLocale: 'pt',
  locales,
  // Prefixo de idioma sempre visível na URL (ex: /pt/dashboard)
  localePrefix: 'always'
});

export const config = {
  // Matcher configurado para ignorar arquivos estáticos e APIs
  matcher: [
    // Detecta rotas que começam com os locales suportados
    '/', 
    '/(pt|en)/:path*',
    // Ignora arquivos internos e estáticos
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
