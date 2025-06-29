import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default async function Header() {
  const t = await getTranslations('Header');
  const tNav = await getTranslations('Navigation');
  const navLinks = [
    { href: '#intro', label: tNav('intro') },
    { href: '#amenities', label: tNav('amenities') },
    { href: '#lots', label: tNav('lots') },
    { href: '#contact', label: tNav('contact') },
  ];

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center justify-center mr-auto" prefetch={false}>
        <Image src="https://placehold.co/100x50.png" data-ai-hint="logo" alt={t('title')} width={100} height={50} />
        <span className="sr-only">{t('title')}</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center ml-auto md:ml-6">
        <LanguageSwitcher />

        {/* Mobile Navigation */}
        <div className="md:hidden ml-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" prefetch={false}>
                  <Image src="https://placehold.co/100x50.png" data-ai-hint="logo" alt={t('title')} width={100} height={50} />
                  <span className="sr-only">{t('title')}</span>
                </Link>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
