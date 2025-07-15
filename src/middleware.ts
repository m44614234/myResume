import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const corsMiddleware = async (req: NextRequest) => {
  const res = NextResponse.next();

  // تنظیم هدرهای CORS
  res.headers.set("Access-Control-Allow-Origin", "*"); // یا آدرس خاصی که می‌خواهید اجازه دهید
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return res;
};

export default async function middleware(req: NextRequest) {
  const res = await corsMiddleware(req); // فراخوانی middleware CORS
  return createMiddleware({
    locales: ["en", "id"],
    defaultLocale: "en",
  })(req) || res; // اگر createMiddleware پاسخی برگرداند، آن را برگردانید
}

export const config = {
  matcher: ["/", "/(id|en)/:path*"],
};
