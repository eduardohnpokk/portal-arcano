import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AuthProvider } from '@/context/AuthContext';
import "./globals.css";

/**
 * Layout Mestre - Portal Arcano 2.0
 * ATUALIZAÇÃO SAE: Ajuste de params para Promise (Compatibilidade Next.js 15/16).
 */
export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Em 2026, params DEVE ser aguardado antes do uso
  const { locale } = await props.params;
  
  // Recupera as mensagens do dicionário (pt.json ou en.json)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-slate-950 text-slate-50 antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <main className="min-h-screen flex flex-col">
              {children}
            </main>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
