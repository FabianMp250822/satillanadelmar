import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Download, MapPin } from 'lucide-react';

export default async function Portfolio() {
  const t = await getTranslations('Portfolio');
  const portfolioUrl = "https://drive.google.com/file/d/1eb7Hv8CIii5ZpDWz4k5Snq5OY0TQ_4BY/view?usp=sharing";
  const embedUrl = "https://drive.google.com/file/d/1eb7Hv8CIii5ZpDWz4k5Snq5OY0TQ_4BY/preview";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7512404090595!2d-75.4617588303868!3d10.46128506161864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef63d00b6478085%3A0x65781c9e4b863a3!2sSANTILLANA%20DEL%20MAR!5e0!3m2!1sen!2sco";
  const mapUrl = "https://maps.app.goo.gl/3fF9dJzQf6gS1qE86";

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          
          {/* Portfolio Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-center lg:text-left text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
              {t('title')}
            </h2>
            <div className="border rounded-lg overflow-hidden shadow-2xl aspect-video bg-muted">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay"
                title="Portfolio PDF"
              ></iframe>
            </div>
            <div className="text-center">
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  {t('downloadButton')}
                </Button>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-center lg:text-left text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
              {t('mapTitle')}
            </h2>
            <div className="border rounded-lg overflow-hidden shadow-2xl aspect-video bg-muted">
               <iframe
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('mapAlt')}
              ></iframe>
            </div>
             <div className="text-center">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <MapPin className="mr-2 h-5 w-5" />
                  {t('openMapButton')}
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
