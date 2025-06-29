import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default async function Header() {
  const t = await getTranslations('Header');

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image src="https://placehold.co/100x50.png" data-ai-hint="logo" alt="Santillana del Mar Logo" width={100} height={50} />
        <span className="sr-only">{t('title')}</span>
      </Link>
      <nav className="ml-auto flex items-center">
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
