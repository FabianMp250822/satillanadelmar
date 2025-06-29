'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useTranslations } from 'next-intl';

const galleryImages = [
  { src: 'https://i.ibb.co/Pz9m9WkN/panoramica.jpg', alt: 'Vista Aérea 1', hint: 'aerial property' },
  { src: 'https://i.ibb.co/8hPB0jB/panoramica-3.jpg', alt: 'Vista Aérea 2', hint: 'aerial landscape' },
  { src: 'https://i.ibb.co/VYNNnDtQ/porteria.jpg', alt: 'Portería de Lujo (Día)', hint: 'luxury gatehouse day' },
  { src: 'https://i.ibb.co/xS02g6Tm/porteria-dos.jpg', alt: 'Portería de Lujo (Noche)', hint: 'luxury gatehouse night' },
  { src: 'https://i.ibb.co/fgVg9nn/unnamed.png', alt: 'Cancha Múltiple', hint: 'sports court' },
  { src: 'https://i.ibb.co/ZRVb3W4B/ginnacio-area-libre.jpg', alt: 'Gimnasio Biosaludable', hint: 'outdoor gym' },
  { src: 'https://i.ibb.co/HTDKqhFj/comedor-social.jpg', alt: 'Salón Social', hint: 'social hall' },
  { src: 'https://i.ibb.co/zV6tNF0V/picina-social-3.jpg', alt: 'Piscina Social', hint: 'resort pool' },
  { src: 'https://i.ibb.co/9HQgndbC/picina-social-2.jpg', alt: 'Piscina Social 2', hint: 'poolside lounge' },
  { src: 'https://i.ibb.co/MxtdHbfD/parque-de-mascotas.jpg', alt: 'Parque de Mascotas', hint: 'pet park' },
];

export default function Gallery() {
  const t = useTranslations('Gallery');

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {t('title')}
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
            {t('subtitle')}
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
