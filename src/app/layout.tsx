//This file is not used directly. Instead, see src/app/[locale]/layout.tsx.
//The 'use client' directive is required by Next.js for the notFound() function.
'use client';
import { notFound } from 'next/navigation';

export default function RootLayout() {
 notFound();
}