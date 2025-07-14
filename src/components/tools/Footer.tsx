"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const items = useTranslations("footer.items");
  const footer = useTranslations("footer");

  const locale = useLocale()

  return (
    <footer dir={locale === 'en' ? "ltr" : "rtl"} className="md:mt-10 px-4 md:px-8 md:pt-20">
      <div className="container mx-auto">
        <div className="mt-6 md:mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <div className="text-center font-normal !text-gray-700">
            <p>
              {" "}
              &copy; {CURRENT_YEAR} {footer("copyright")}
            </p>
          </div>

          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                {items("Home")}
              </Link>
            </li>
            <li>
              <Link
                href={`${locale}/about`}
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                {items("About_Us")}
              </Link>
            </li>
           
            <li>
              <Link
                href={`${locale}/contact`}
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                {items("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
