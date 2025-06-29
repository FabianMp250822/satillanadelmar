import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default async function Footer() {
  const t = await getTranslations('Footer');
  
  return (
    <footer id="contact" className="bg-secondary border-t border-border/40 py-12 text-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <Image src="https://i.ibb.co/k26TVv6/image.png" alt={t('logoAlt')} width={200} height={100} />
        
        <div className="mt-8 space-y-4 text-lg">
          <div className="flex items-center justify-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            <a href={`tel:${t('phone')}`} className="hover:text-primary transition-colors">{t('phone')}</a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            <a href={`mailto:${t('email')}`} className="hover:text-primary transition-colors">{t('email')}</a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <span>{t('address')}</span>
          </div>
        </div>

        <div className="mt-8">
            <p className="text-sm text-foreground/80">{t('copyright', {year: new Date().getFullYear()})}</p>
        </div>
      </div>
    </footer>
  );
}
