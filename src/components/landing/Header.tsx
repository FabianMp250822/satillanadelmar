import { Mountain } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">Santillana Living</span>
      </Link>
      <span className="ml-2 text-xl font-bold font-headline">Santillana Living</span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          Features
        </Link>
        <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          Gallery
        </Link>
        <Link href="#visualizer" className="text-sm font-medium hover:underline underline-offset-4 text-foreground" prefetch={false}>
          Visualizer
        </Link>
      </nav>
    </header>
  );
}
