import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AuthProvider } from '@/context/AuthContext';
import "./globals.css";

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Recupera as mensagens do dicionário (pt.json ou en.json)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-slate-950 text-slate-50 antialiased">
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
