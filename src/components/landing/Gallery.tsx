'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useTranslations } from 'next-intl';

const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Property View 1', hint: 'modern house exterior' },
  { src: 'https://placehold.co/800x600.png', alt: 'Property View 2', hint: 'luxury kitchen interior' },
  { src: 'https://placehold.co/800x600.png', alt: 'Property View 3', hint: 'cozy living room' },
  { src: 'https://placehold.co/800x600.png', alt: 'Property View 4', hint: 'bedroom panoramic view' },
  { src: 'https://placehold.co/800x600.png', alt: 'Property View 5', hint: 'landscaped garden' },
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
