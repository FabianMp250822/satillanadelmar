import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Gallery from '@/components/landing/Gallery';
import DreamHomeVisualizer from '@/components/landing/DreamHomeVisualizer';
import Footer from '@/components/landing/Footer';
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
        <Features />
        <Gallery />
        <DreamHomeVisualizer />
      </main>
      <Footer />
    </div>
  );
}
