'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Home } from 'lucide-react';
import { Link } from '@/navigation';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  
  const navLinks = [
    { href: '#benefits', label: tNav('benefits') },
    { href: '#virtual-tour', label: tNav('virtualTour') },
    { href: '#lake-view', label: tNav('lakeView') },
    { href: '#portfolio', label: tNav('portfolio') },
  ];

  return (
    <footer className="bg-secondary border-t border-border/40 text-sm animate-fade-in opacity-0 [animation-delay:200ms]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Column 1: Brand */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <Home className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">{t('logoAlt')}</h3>
            </div>
            <p className="text-foreground/80 max-w-xs">{t('slogan')}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">{t('quickLinksTitle')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">{t('contactTitle')}</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${t('phone')}`} className="hover:text-primary transition-colors">{t('phone')}</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${t('email')}`} className="hover:text-primary transition-colors">{t('email')}</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t('address')}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/40" />

        <div className="text-center">
            <p className="text-xs text-foreground/60">{t('copyright', {year: new Date().getFullYear()})}</p>
        </div>
      </div>
    </footer>
  );
}
