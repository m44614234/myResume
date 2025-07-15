import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};

export function middleware(req: NextRequest) {
  
  const res = NextResponse.next();

  // تنظیم هدرهای CORS
  res.headers.set('Access-Control-Allow-Origin', '*'); // یا آدرس خاصی که می‌خواهید اجازه دهید
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return res;
}


// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'id'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// export const config = {

  
//   // Match only internationalized pathnames
//   matcher: ['/', '/(id|en)/:path*']

   
// };