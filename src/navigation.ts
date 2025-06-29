import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;
export const localePrefix = 'as-needed';

export const pathnames = {
  '/': '/',
} as const;
 
export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });