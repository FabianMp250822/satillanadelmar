import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Dog, Waves, Dumbbell, Dribbble, Users, Flame, CookingPot, Recycle, ShieldCheck, ParkingCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const featureIcons = {
  playgrounds: <Baby className="h-10 w-10 text-primary" />,
  pools: <Waves className="h-10 w-10 text-primary" />,
  gym: <Dumbbell className="h-10 w-10 text-primary" />,
  court: <Dribbble className="h-10 w-10 text-primary" />,
  parking: <ParkingCircle className="h-10 w-10 text-primary" />,
  bonfire: <Flame className="h-10 w-10 text-primary" />,
  bbq: <CookingPot className="h-10 w-10 text-primary" />,
  social: <Users className="h-10 w-10 text-primary" />,
  rcu: <Recycle className="h-10 w-10 text-primary" />,
  security: <ShieldCheck className="h-10 w-10 text-primary" />,
};

export default async function Amenities() {
  const t = await getTranslations('Amenities');
  const features = (Object.keys(featureIcons) as (keyof typeof featureIcons)[]).map((key) => ({
    icon: featureIcons[key],
    title: t(`${key}.title`),
  }));

  return (
    <section id="amenities" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            {t('title')}
          </h2>
        </div>
        <div className="text-center">
          <div className="inline-grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 bg-transparent border-primary/50 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  {feature.icon}
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-foreground/80">{feature.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}