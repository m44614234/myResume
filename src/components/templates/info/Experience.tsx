import { baseUrl } from "@/utils/baseUrl";
import { faBook, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Experience = () => {
  const edu = useTranslations("education");

  const locale: any = useLocale();

  const [expData, setExpData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getExperience = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/experience`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const expData = await res.json();
      console.log("expData =>", expData);

      setExpData(expData.data);
      setLoading(false);
    } catch (error) {
      console.log("Error =>", error);
      toast.error(
        `${
          locale === "en" ? "Failed to load data." : "خطا در بارگذاری اطلاعات"
        }`
      );
      setLoading(false);
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

        <article className="container mx-auto grid grid-cols-1 gap-8 gap-y-6 md:gap-16 md:gap-y-12">
          {loading && expData.length === 0 ? (
            <div className="loader"></div>
          ) : (
            expData?.map((item: any) => (
              <div
                className="bg-gray-100 shadow-lg gap-3 p-6 rounded-md"
                key={item?._id}
              >
                <div className="flex  items-center justify-between rounded-none overflow-visible">
                  <div className="flex flex-col gap-1 w-full">
                    <p className="font-bold text-xs text-blue-900">
                      {locale == "en" ? item?.enDate : item?.faDate}
                    </p>
                    <p className="w-full text-md text-gray-800 md:text-lg font-bold">
                      {locale == "en" ? item?.enTitle : item?.faTitle}
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faLaptop} className="text-gray-800" />
                </div>
                <div className="grid justify-start pt-2">
                  <p className="line-clamp-1 font-normal text-sm text-gray-700">
                    {locale == "en" ? item?.enDesc : item?.faDesc}
                  </p>
                </div>
              </div>
            ))
          )}
        </article>
      </section>
    </>
  );
};
export default Experience;
