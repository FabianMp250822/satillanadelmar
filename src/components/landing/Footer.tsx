'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Home } from 'lucide-react';
import { Link } from '@/navigation';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  
  const navLinks = [
    { href: '#intro', label: tNav('intro') },
    { href: '#amenities', label: tNav('amenities') },
    { href: '#lots', label: tNav('lots') },
    { href: '#portfolio', label: tNav('portfolio') },
  ];

  return (
    <footer className="bg-secondary border-t border-border/40 text-sm">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Home className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">{t('logoAlt')}</h3>
            </div>
            <p className="text-foreground/80 max-w-xs">{t('slogan')}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">{t('quickLinksTitle')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">{t('contactTitle')}</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${t('phone')}`} className="hover:text-primary transition-colors">{t('phone')}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${t('email')}`} className="hover:text-primary transition-colors">{t('email')}</a>
              </div>
              <div className="flex items-center gap-3">
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