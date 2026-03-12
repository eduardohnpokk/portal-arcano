import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // Idioma padrão caso a detecção falhe
  defaultLocale: 'pt',
  locales,
  // Prefixo de idioma sempre visível na URL (ex: /pt/login)
  localePrefix: 'always'
});

export const config = {
  // Matcher para ignorar pastas de sistema e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
