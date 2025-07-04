import { getTranslations } from 'next-intl/server';

export default async function Benefits() {
  const t = await getTranslations('Benefits');
  const embedUrl = "https://www.youtube.com/embed/_1NqYcfxlzw"; // Replace with your actual video embed URL

  return (
    <section id="benefits" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            {t('title')}
          </h2>
        </div>
        <div className="mx-auto max-w-sm">
          <div className="relative aspect-[9/16] w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title="Video Santillana del Mar Benefits"
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
