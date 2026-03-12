import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Locais suportados pelo Portal Arcano 2.0
export const locales = ['pt', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // Valida se o locale vindo da URL é suportado
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
