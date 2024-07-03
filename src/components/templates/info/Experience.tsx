import { faBook, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Experience = () => {
  const edu = useTranslations("education");

  const locale: any = useLocale();
  console.log("locale =>", locale);

  const [expData, setExpData] = useState([]);

  const getExperience = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/experience", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const expData = await res.json();

      setExpData(expData.data);
      console.log("expData =>", expData.data);
    } catch (error) {
      console.error("Error fetching experience data:", error);
    }
  };

  useEffect(() => {
    getExperience();
  }, []);

  return (
    <>
      <section dir={locale === "id" ? "rtl" : "ltr"}>
        <div className="text-xl mb-2 lg:text-3xl text-gray-800 dark:to-gray-400">
          {edu("experience")}
        </div>

        <article className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
          {expData?.map((item : any) => (
            <div
              className="bg-gray-100 shadow-lg gap-3 p-6 rounded-md"
              key={item?._id}
            >
              <div className="flex  items-center justify-between rounded-none overflow-visible">
                <div className="flex flex-col gap-1 w-full">
                  <p className="font-bold text-xs text-blue-900">
                    {locale == "en" ? item?.enDate : item?.faDate}
                  </p>
                  <p className="w-full text-gray-800 text-lg font-bold">
                    {locale == "en" ? item?.enTitle : item?.faTitle}
                  </p>
                </div>
                <FontAwesomeIcon icon={faLaptop} className="text-gray-800" />
              </div>
              <div className="grid justify-start pt-2">
                <p className=" font-normal text-sm text-gray-700">
                  {locale == "en" ? item?.enDesc : item?.faDesc}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};
export default Experience;
