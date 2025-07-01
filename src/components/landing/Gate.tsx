import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Home } from 'lucide-react';

export default async function Gate() {
  const t = await getTranslations('Gate');
  return (
    <section id="gate" className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center bg-background animate-fade-in opacity-0 [animation-delay:200ms]">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            <Image 
              src="https://i.ibb.co/VYNNnDtQ/porteria.jpg"
              alt={t('imageAlt')}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
              data-ai-hint="luxury gatehouse day"
            />
            <Image 
              src="https://i.ibb.co/xS02g6Tm/porteria-dos.jpg"
              alt={t('imageAlt')}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
              data-ai-hint="luxury gatehouse night"
            />
        </div>
        <h2 className="mt-8 text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl font-headline text-primary uppercase">
          {t('title')}
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Home className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold">{t('logoAlt')}</h3>
        </div>
      </div>
    </section>
  );
}
