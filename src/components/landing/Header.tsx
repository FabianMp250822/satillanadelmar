import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Home } from 'lucide-react';

export default async function Header() {
  const t = await getTranslations('Header');

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center gap-2 mr-auto" prefetch={false}>
        <Home className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">{t('title')}</span>
      </Link>
      
      <div className="flex items-center ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
