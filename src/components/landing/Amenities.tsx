import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ParkingCircle, Flame, CookingPot, Recycle, ShieldCheck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const amenityData: {[key: string]: { imageUrl?: string; hint?: string; icon?: React.ReactNode }} = {
  pools: {
    imageUrl: 'https://i.ibb.co/zV6tNF0V/picina-social-3.jpg',
    hint: 'swimming pool',
  },
  court: {
    imageUrl: 'https://i.ibb.co/fgVg9nn/unnamed.png',
    hint: 'sports court',
  },
  playgrounds: {
    imageUrl: 'https://i.ibb.co/MxtdHbfD/parque-de-mascotas.jpg',
    hint: 'pet park',
  },
  social: {
    imageUrl: 'https://i.ibb.co/HTDKqhFj/comedor-social.jpg',
    hint: 'social hall',
  },
  gym: {
    imageUrl: 'https://i.ibb.co/ZRVb3W4B/ginnacio-area-libre.jpg',
    hint: 'outdoor gym',
  },
  parking: {
    icon: <ParkingCircle className="h-10 w-10 text-primary" />,
  },
  bonfire: {
    icon: <Flame className="h-10 w-10 text-primary" />,
  },
  bbq: {
    icon: <CookingPot className="h-10 w-10 text-primary" />,
  },
  rcu: {
    icon: <Recycle className="h-10 w-10 text-primary" />,
  },
  security: {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
};

export default async function Amenities() {
  const t = await getTranslations('Amenities');
  const amenities = (Object.keys(amenityData) as (keyof typeof amenityData)[]).map((key) => ({
    key,
    title: t(`${key}.title`),
    ...amenityData[key],
  }));

  // Reorder to show images first
  amenities.sort((a, b) => {
    if (a.imageUrl && !b.imageUrl) return -1;
    if (!a.imageUrl && b.imageUrl) return 1;
    return 0;
  });

  return (
    <section id="amenities" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            {t('title')}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {amenities.map((amenity) => (
            <Card key={amenity.key} className="group overflow-hidden rounded-lg bg-card border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-square w-full">
                {amenity.imageUrl ? (
                  <Image
                    src={amenity.imageUrl}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={amenity.hint}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-card/50">
                    {amenity.icon}
                  </div>
                )}
              </div>
              <CardContent className="p-4 text-center flex-grow flex items-center justify-center">
                <p className="font-semibold text-foreground/90">{amenity.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
