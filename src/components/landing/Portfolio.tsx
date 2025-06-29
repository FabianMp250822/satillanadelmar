import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default async function Portfolio() {
  const t = await getTranslations('Portfolio');
  const portfolioUrl = "https://drive.google.com/file/d/1eb7Hv8CIii5ZpDWz4k5Snq5OY0TQ_4BY/view?usp=sharing";

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            {t('title')}
          </h2>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-2xl aspect-video bg-muted">
            <Image
                src="https://placehold.co/1200x675.png"
                alt="Portfolio Preview"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                data-ai-hint="document portfolio"
            />
          </div>
          <div className="mt-8 text-center">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                {t('downloadButton')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
