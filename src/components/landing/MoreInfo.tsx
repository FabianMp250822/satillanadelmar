import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';

export default async function MoreInfo() {
  const t = await getTranslations('MoreInfo');

  return (
    <div className="bg-background">
      {/* Islands Section */}
      <section id="islands" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in opacity-0 [animation-delay:200ms]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <Image src="https://i.ibb.co/Pz9m9WkN/panoramica.jpg" alt={t('Islands.ecologicalPathsAlt')} width={600} height={400} className="rounded-lg object-cover" data-ai-hint="ecological path" />
              <h3 className="mt-4 text-2xl font-bold font-headline">{t('Islands.ecologicalPaths')}</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://i.ibb.co/8hPB0jB/panoramica-3.jpg" alt={t('Islands.privateIslandsAlt')} width={600} height={400} className="rounded-lg object-cover" data-ai-hint="private island lounge" />
              <h3 className="mt-4 text-2xl font-bold font-headline">{t('Islands.privateIslands')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Lots Section */}
      <section id="lots" className="relative w-full py-20 md:py-32 lg:py-40 text-foreground overflow-hidden animate-fade-in opacity-0 [animation-delay:200ms]">
        <iframe
          src="https://www.youtube.com/embed/e_JM_DNxtdE?autoplay=1&mute=1&loop=1&playlist=e_JM_DNxtdE&controls=0&showinfo=0&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={t('Lots.backgroundImageAlt')}
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 z-0"
        ></iframe>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">{t('Lots.title')}</h2>
          <div className="mt-8 inline-block bg-primary/80 text-primary-foreground p-6 rounded-lg">
            <p className="text-xl font-headline">{t('Lots.pricePerM2')}</p>
            <p className="text-6xl font-bold">${t('Lots.price')}</p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in opacity-0 [animation-delay:200ms]">
        <div className="container px-4 md:px-6">
            <Card className="bg-background/50 p-8 max-w-6xl mx-auto">
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8 p-0">
                    <div className='md:w-1/3 text-center'>
                        <h2 className="text-3xl font-bold font-headline text-primary mb-4">{t('Payment.title')}</h2>
                        <Image src="https://i.ibb.co/zV6tNF0V/picina-social-3.jpg" alt={t('Payment.imageAlt')} width={600} height={400} className="rounded-lg mx-auto object-cover" data-ai-hint="serene lake sunset" />
                    </div>
                    <div className="md:w-2/3 space-y-4 text-lg text-center">
                        <p>{t('Payment.socialInterest')}</p>
                        <p><strong className='text-primary'>{t('Payment.separationTitle')}</strong> {t('Payment.separationValue')}</p>
                        <p><strong className='text-primary'>{t('Payment.initialFeeTitle')}</strong> {t('Payment.initialFeeValue')}</p>
                        <p>{t('Payment.financing')}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Policies & Services Section */}
      <section id="policies" className="w-full py-12 md:py-24 lg:py-32 bg-background animate-fade-in opacity-0 [animation-delay:200ms]">
        <div className="container px-4 md:px-6 space-y-16">
          <div className="grid gap-10 md:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold font-headline text-primary">{t('Policies.deliveryTitle')}</h3>
              <p className="text-foreground/80">{t('Policies.deliveryDescription')}</p>
              <h3 className="text-2xl font-bold font-headline text-primary mt-8">{t('Policies.constructionTitle')}</h3>
              <p className="text-foreground/80">{t('Policies.constructionDescription')}</p>
            </div>
            <Image src="https://i.ibb.co/MxtdHbfD/parque-de-mascotas.jpg" alt={t('Policies.imageAlt')} width={600} height={800} className="rounded-lg object-cover" data-ai-hint="tree water" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-center max-w-6xl mx-auto">
             <Image src="https://i.ibb.co/HTDKqhFj/comedor-social.jpg" alt={t('Services.imageAlt')} width={600} height={600} className="rounded-lg object-cover" data-ai-hint="tropical plant" />
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold font-headline text-primary">{t('Services.title')}</h3>
              <p className="text-foreground/80">{t('Services.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
