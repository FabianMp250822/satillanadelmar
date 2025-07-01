import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';

export default async function Intro() {
    const t = await getTranslations('Intro');
    return (
        <section id="intro" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms]">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                        {t('title')}
                    </h2>
                </div>
                <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
                    <Card className="bg-card/50 border-primary/20 text-center p-8 flex flex-col justify-center items-center space-y-4 opacity-0 animate-slide-in-left [animation-delay:400ms]">
                        <h3 className="text-2xl font-bold font-headline">{t('urbanDevelopment.title')}</h3>
                        <p className="text-foreground/80">
                            {t('urbanDevelopment.description')}
                        </p>
                    </Card>
                    <Card className="bg-card/50 border-primary/20 text-center p-8 flex flex-col justify-center items-center space-y-4 opacity-0 animate-slide-in-right [animation-delay:600ms]">
                        <h3 className="text-2xl font-bold font-headline">{t('strategicLocation.title')}</h3>
                        <p className="text-foreground/80">
                            {t('strategicLocation.description')}
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
