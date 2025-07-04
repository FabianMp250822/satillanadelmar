import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Portfolio from '@/components/landing/Portfolio';
import Benefits from '@/components/landing/Benefits';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Home({ params: {locale} }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Portfolio />
      </main>
    </div>
  );
}
