"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import styles from "@/styles/nabvar.module.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalSwitcher from "./LocalSwitch";
import { useLocale, useTranslations } from "next-intl";
export function Navbar() {
  const [show, setShow] = useState(false);

  const ToggleEvent = () => {
    setShow(!show);
  };

  // const { data: session }: any = useSession();

  const t = useTranslations("nav_item");
  const l = useTranslations("Index");

  const locale = useLocale();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setShow(false)
    );
  }, []);

  return (
    <section className="sticky shadow-md bg-gray-100 px-1 top-0 z-50 border-0 w-full py-2 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between w-full ">
        <div className="flex flex-row gap-3 items-center">
          <div className="material text-lg font-bold text-gray-800 dark:text-gray-300">
            My Resume
          </div>
          <ThemeSwitch />
          <LocalSwitcher />
        </div>

        <ul
          className="ml-10 hidden items-center gap-8 lg:flex "
          key={t("Home")}
        >
          <Link href="/" className="dark:text-gray-300">
            {t("Home")}
          </Link>
          <Link href={`/${locale}/about`} className="dark:text-gray-300">
            {t("About_Us")}
          </Link>
          <Link href={`/${locale}/contact`} className="dark:text-gray-300">
            {t("Contact_Us")}
          </Link>
        </ul>
        {/* <div className="hidden items-center gap-2 lg:flex">
          {!session ? (
            <>
              <Link
                href={`/${locale}/login`}
                className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 text-gray-800 dark:text-gray-400"
              >
                {l("login")}
              </Link>
              <Link
                href={`/${locale}/register`}
                className="rounded-md bg-gray-900 text-gray-500 px-3 py-2 border border-gray-600 border-1 text-sm font-semibold  shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {l("register")}
              </Link>
            </>
          ) : (
            <>
              <span className="ml-10 text-sm text-gray-600 dark:text-gray-400">
                {session.user?.email}
              </span>

              <button
                onClick={() => {
                  signOut();
                }}
                className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 text-gray-800  dark:text-gray-500"
              >
                Log out
              </button>
            </>
          )}
        </div> */}
        <button
          onClick={ToggleEvent}
          className="ml-auto inline-block text-gray-800 dark:text-gray-400 lg:hidden"
        >
          {show ? (
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}

      {show ? (
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4" key={t("Home")}>
            <Link href="/" className="dark:text-gray-300">
              {t("Home")}
            </Link>
            <Link href={`/${locale}/about`} className="dark:text-gray-300">
              {t("About_Us")}
            </Link>
            <Link href={`/${locale}/contact`} className="dark:text-gray-300">
              {t("Contact_Us")}
            </Link>
          </ul>
          {/* <div className="mt-6 mb-4 flex items-center gap-2">
            {!session ? (
              <>
                <Link
                  href={`/${locale}/login`}
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 text-gray-800 dark:text-gray-400"
                >
                  {l("login")}
                </Link>
                <Link
                  href={`/${locale}/register`}
                  className="rounded-md bg-gray-900 text-gray-500  px-3 py-2 border border-gray-600 border-1 text-sm font-semibold shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {l("register")}
                </Link>
              </>
            ) : (
              <>
                <span className="ml-10 text-sm text-gray-600 dark:text-gray-400">
                  {session.user?.email}
                </span>

                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="hidden  lg:block lg:text-sm lg:font-semibold lg:leading-6 text-gray-800  dark:text-gray-600"
                >
                  Log out
                </button>
              </>
            )}
          </div> */}
        </div>
      ) : null}
    </section>
  );
}

export default Navbar;
