import createMiddleware from 'next-intl/middleware';
 
export const locales = ['en', 'es'] as const;
export const localePrefix = 'as-needed';
 
export default createMiddleware({
  locales,
  defaultLocale: 'es',
  localePrefix
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};
