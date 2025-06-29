import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import LoadingScreen from '@/components/landing/LoadingScreen';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const locales = ['en', 'es'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: 'https://i.ibb.co/5x8xbmtK/favicon.png',
    }
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<Props>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({locale});
  
  return (
    <html lang={locale} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LoadingScreen />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
