import React from 'react';

// This root layout is required by Next.js. It's used for the root page
// that redirects to a default locale.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
