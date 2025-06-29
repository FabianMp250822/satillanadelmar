import { Mountain, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');
  
  return (
    <footer className="bg-background border-t border-border/40 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold font-headline">Santillana Living</span>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-foreground/80">{t('copyright', {year: new Date().getFullYear()})}</p>
          <div className="mt-2 space-x-4">
            <Link href="/sitemap.xml" className="text-sm text-foreground/60 hover:text-primary" prefetch={false}>
              {t('sitemap')}
            </Link>
            <Link href="/robots.txt" className="text-sm text-foreground/60 hover:text-primary" prefetch={false}>
              {t('robots')}
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <Twitter className="h-6 w-6 text-foreground/60 hover:text-primary" />
          </Link>
          <Link href="#" aria-label="GitHub" prefetch={false}>
            <Github className="h-6 w-6 text-foreground/60 hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn" prefetch={false}>
            <Linkedin className="h-6 w-6 text-foreground/60 hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
