'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="animate-fade-in animate-pulse-subtle">
        <Image
          src="https://placehold.co/200x100.png"
          data-ai-hint="logo gold"
          alt="Santillana del Mar Logo"
          width={200}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
