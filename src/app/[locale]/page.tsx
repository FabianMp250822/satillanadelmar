import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Intro from '@/components/landing/Intro';
import Gate from '@/components/landing/Gate';
import Amenities from '@/components/landing/Amenities';
import MoreInfo from '@/components/landing/MoreInfo';
import Footer from '@/components/landing/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';
import Portfolio from '@/components/landing/Portfolio';
import Gallery from '@/components/landing/Gallery';
import DreamHomeVisualizer from '@/components/landing/DreamHomeVisualizer';

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
        <Intro />
        <Gate />
        <Amenities />
        <MoreInfo />
        <Gallery />
        <DreamHomeVisualizer />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
