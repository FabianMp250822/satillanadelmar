import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-20"
        data-ai-hint="serene landscape"
        priority
      />
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
          Discover Santillana Living
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
          Your serene escape into nature's embrace. Build your dream home in the heart of Santillana del Mar.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#visualizer">Visualize Your Dream Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
