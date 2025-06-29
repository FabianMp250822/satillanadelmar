import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('Hero');
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-foreground">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt={t('backgroundImageAlt')}
        fill
        className="absolute inset-0 z-0 object-cover"
        data-ai-hint="serene landscape"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container px-4 md:px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline uppercase">
          {t('title')}
        </h1>
        <div className="mt-8">
            <Image src="https://placehold.co/200x100.png" data-ai-hint="logo gold" alt={t('logoAlt')} width={200} height={100} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 48C480 48 960 48 1440 48V120H0V48Z" fill="hsl(var(--background))" />
          <path d="M0 48C240 48 480 48 720 48C960 48 1200 48 1440 48C1440 48 1391.56 70.8547 1320 82.2222C1248.44 93.5897 1152.44 33.7778 1080 30.2222C1007.56 26.6667 912.444 82.2222 840 82.2222C767.556 82.2222 671.556 21.3333 600 18.2222C528.444 15.1111 432.444 82.2222 360 82.2222C287.556 82.2222 191.556 30.2222 120 30.2222C48.4444 30.2222 0 48 0 48Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>
    </section>
  );
}
