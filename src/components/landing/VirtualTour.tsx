import { getTranslations } from 'next-intl/server';

export default async function VirtualTour() {
  const t = await getTranslations('VirtualTour');
  const embedUrl = "https://www.youtube.com/embed/uvJBr8jquC0";

  return (
    <section id="virtual-tour" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            {t('title')}
          </h2>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title="Recorrido Virtual Santillana del Mar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
