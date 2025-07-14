"use client";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Hero() {
  const t = useTranslations("Index");

  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <p className="text-2xl md:text-2xl lg:text-5xl text-gray-900 font-bold dark:text-gray-500">
            {t("title")}
          </p>

          <p className="mt-4 text-lg md:text-2xl lead mb-12 w-full text-gray-700   dark:text-gray-300  desc_hero">
            {t("desc")}
          </p>

          <p className="font-bold text-md mt-12 mb-4 text-blue-gray-900  uppercase dark:text-gray-500">
            {t("connect")}
          </p>
          <div className="flex flex-row gap-4 md:gap-8">
            <Link
              href={"https://www.facebook.com/profile.php?id=100076254022455"}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color="gray"
                className="text-2xl md:text-3xl dark:text-gray-500"
              />
            </Link>

            <Link href={"https://www.instagram.com/mr.hajizadeh_1376/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                color="gray"
                className="text-2xl md:text-3xl dark:text-gray-500"
              />
            </Link>

            <Link href={"https://github.com/hajizadeh1376"}>
              <FontAwesomeIcon
                icon={faGithub}
                color="gray"
                className="text-2xl md:text-3xl dark:text-gray-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
