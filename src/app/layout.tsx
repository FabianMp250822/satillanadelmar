import React from 'react';

// This root layout is required by Next.js.
// It's used for the root page that redirects to a default locale,
// and for wrapping the internationalized layout.
// By just returning children, we avoid nested <html> and <body> tags.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
