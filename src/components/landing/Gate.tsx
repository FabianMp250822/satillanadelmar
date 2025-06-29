import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Gate() {
  const t = await getTranslations('Gate');
  return (
    <section id="gate" className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center bg-background">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <Image 
          src="https://placehold.co/1200x600.png"
          alt={t('imageAlt')}
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl"
          data-ai-hint="luxury gatehouse night"
        />
        <h2 className="mt-8 text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl font-headline text-primary uppercase">
          {t('title')}
        </h2>
        <div className="mt-4">
          <Image src="https://i.ibb.co/k26TVv6/image.png" alt={t('logoAlt')} width={150} height={75} />
        </div>
      </div>
    </section>
  );
}
