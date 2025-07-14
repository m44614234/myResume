import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/information.module.css";
import { useLocale, useTranslations } from "next-intl";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Information = () => {
  const c = useTranslations("Contact");
  const locale = useLocale();

  return (
    <section
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`gap-8 flex flex-col  w-full , px-2 `}
    >
      <span className="text-sm text-gray-700 ">{c("contact")}</span>
      <p className="text-xl text-gray-800 dark:text-gray-500">{c("contacts")}</p>

      <div className="flex text-lg gap-2 text-gray-800 dark:text-gray-300" dir={locale === "en" ? "ltr" : "rtl"}>
      <FontAwesomeIcon icon={faPhone} />
        <p>09212140481</p>
      </div>

      <div className="flex text-lg gap-2 text-gray-800 dark:text-gray-300" dir={locale === "en" ? "ltr" : "rtl"}>
        <FontAwesomeIcon icon={faMailBulk} />
        <p>MRHZS1376@yahoo.com</p>
      </div>

      <div className="flex text-lg gap-2 text-gray-800 dark:text-gray-300" dir={locale === "en" ? "ltr" : "rtl"}>
      <FontAwesomeIcon icon={faTelegram} />
        <p> {c("msg")} 09212140481</p>
      </div>
    </section>
  );
};

export default Information;
