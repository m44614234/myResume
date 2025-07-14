"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import styles from "@/styles/nabvar.module.css";
import {
  faBars,
  faContactBook,
  faHome,
  faInfo,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
    <section className="sticky shadow-md bg-gray-100  top-0 z-50 border-0 w-full py-2 dark:bg-gray-800">
      <section className="container mx-auto flex items-center justify-between w-full ">
        <div className="flex flex-row gap-6 items-center">
          <div className="material text-lg ml-2 font-bold text-gray-800 dark:text-gray-300">
           Mr.hajizadeh
          </div>
          <ThemeSwitch />
          <LocalSwitcher />
        </div>

        <ul
          className="ml-10 hidden items-center gap-8 lg:flex lg:flex-row-reverse"
          key={t("Home")}
        >
          <div className="flex flex-row gap-1 items-center">
            <Link href="/" className="text-sm font-ShabnamMedium dark:text-gray-300">
              {t("Home")}
            </Link>
            <FontAwesomeIcon
              className="text-md dark:text-gray-300"
              icon={faHome}
            />
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-ShabnamMedium dark:text-gray-300"
            >
              {t("Contact_Us")}
            </Link>
            <FontAwesomeIcon
              className="text-md dark:text-gray-300"
              icon={faPhone}
            />
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Link
              href={`/${locale}/about`}
              className="text-sm font-ShabnamMedium dark:text-gray-300"
            >
              {t("About_Us")}
            </Link>
            <FontAwesomeIcon
              className="text-md dark:text-gray-300"
              icon={faInfo}
            />
          </div>
        </ul>
        <button
          onClick={ToggleEvent}
          className=" inline-block text-gray-800 mx-2 dark:text-gray-400 lg:hidden"
        >
          {show ? (
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </button>
      </section>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}

      {show ? (
        <section className="relative mt-3  justify-center  border-t border-gray-200 pt-4">
          <ul  dir='rtl' className="flex z-50  py-4 h-full  items-center flex-col gap-8" key={t("Home")}>
            <div  className="flex flex-row-reverse gap-1 items-center">
              <Link onClick={()=>setShow(false)} href="/" className="text-sm dark:text-gray-300">
                {t("Home")}
              </Link>
              <FontAwesomeIcon
                className="text-md dark:text-gray-300"
                icon={faHome}
              />
            </div>

            <div  className="flex flex-row-reverse gap-1 items-center">
              <Link
                href={`/${locale}/contact`}
                onClick={()=>setShow(false)}
                className="text-sm dark:text-gray-300"
              >
                {t("Contact_Us")}
              </Link>
              <FontAwesomeIcon
                className="text-md dark:text-gray-300"
                icon={faPhone}
              />
            </div>

            <div  className="flex flex-row-reverse gap-1 items-center">
              <Link
                href={`/${locale}/about`}
                onClick={()=>setShow(false)}
                className="text-sm dark:text-gray-300"
              >
                {t("About_Us")}
              </Link>
              <FontAwesomeIcon
                className="text-md dark:text-gray-300"
                icon={faInfo}
              />
            </div>
          </ul>
          <article onClick={()=>setShow(false)} className="absolute z-40 min-w-full h-[100vh] bg-gray-100 dark:bg-gray-800"></article>
        </section>
      ) : null}
    </section>
  );
}

export default Navbar;
