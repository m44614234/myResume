"use client";
import Breadcrumb from "@/components/templates/breadcrumb/Breadcrumb";
import { useLocale, useTranslations } from "next-intl";

function About() {
  const a = useTranslations("About");
  const locale = useLocale();

  console.log("a =>", a);
  console.log("locale =>", locale);

  return (
    <section className="w-full flex flex-col ">
      
      <Breadcrumb
        route={locale === "id" ? "درباره ما" : "About Us"}
        home={locale === "id" ? "خانه" : "Home"}
      />

      <div
        dir={locale === "en" ? "ltr" : "rtl"}
        className="w-3/4 mx-auto gap-3 flex flex-col md:mt-7"
      >
        <div className="text-xl p-2 text-y-gray dark:text-gray-400">
          {a("desc")}
        </div>
      </div>
    </section>
  );
}
export default About;
