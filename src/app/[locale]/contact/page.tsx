"use client";

import Breadcrumb from "@/components/templates/breadcrumb/Breadcrumb";
import Form from "@/components/templates/contact-us/Form";
import Information from "@/components/templates/contact-us/Information";
import { useLocale } from "next-intl";

const page =  () => {
  const locale = useLocale();

  return (
    <>
      <Breadcrumb
        route={locale === "id" ? "تماس با ما" : "Contact Us"}
        home={locale === "id" ? "خانه" : "Home"}
      />

      <div className=" w-full ">
        <section className="flex flex-row flex-wrap px-2 mx-auto w-full">
          <div className="flex w-full md:w-1/2">
            <Form />
          </div>
          <div className="flex w-full md:w-1/2">
            <Information />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
