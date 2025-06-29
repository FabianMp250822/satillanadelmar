import { Mountain } from 'lucide-react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from './LanguageSwitcher';

export default async function Header() {
  const t = await getTranslations('Header');

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">Santillana Living</span>
      </Link>
      <span className="ml-2 text-xl font-bold font-headline">Santillana Living</span>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          {t('features')}
        </Link>
        <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          {t('gallery')}
        </Link>
        <Link href="#visualizer" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          {t('visualizer')}
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
