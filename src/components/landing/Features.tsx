import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trees, ShieldCheck, AreaChart } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const featureIcons = {
  amenities: <Trees className="h-10 w-10 text-primary" />,
  lots: <AreaChart className="h-10 w-10 text-primary" />,
  payment: <ShieldCheck className="h-10 w-10 text-primary" />,
};

export default async function Features() {
  const t = await getTranslations('Features');
  const features = (['amenities', 'lots', 'payment'] as const).map((key) => ({
    icon: featureIcons[key],
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  }));

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {t('title')}
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                {feature.icon}
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
