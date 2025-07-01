import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('Hero');
  const videoId = 'uvJBr8jquC0';
  // Parameters for a muted, looping, autoplaying background video with no controls
  const embedParams = `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}${embedParams}`;

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-foreground overflow-hidden">
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={t('backgroundImageAlt')}
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 z-0"
      ></iframe>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container px-4 md:px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline uppercase animate-fade-in opacity-0 [animation-delay:200ms]">
          {t('title')}
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-4xl animate-fade-in opacity-0 [animation-delay:400ms]">
          {t('logoAlt')}
        </p>
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
