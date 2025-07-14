import { baseUrl } from "@/utils/baseUrl";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Skills = () => {
  const locale: any = useLocale();
  const s = useTranslations("skills");

  const [skillData, setSkillData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSkill = async () => {
    try {
      const res = await fetch(
        `${baseUrl}/api/skills`,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const skillData = await res.json();

      setSkillData(skillData.data);
      console.log("skillData =>", skillData);
      setLoading(false);
    } catch (error) {
      toast.error(
        `${
          locale === "en" ? "Failed to load data." : "خطا در بارگذاری اطلاعات ."
        }`
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    getSkill();
  }, []);

  return (
    <>
      {/* SKILLS */}
      <section
        className="w-full  flex flex-col mt-8"
        dir={locale === "id" ? "rtl" : "ltr"}
      >
        <div className="flex flex-col gap-1 font-bold dark:text-gray-500">
          <p className="text-xl lg:text-3xl text-gray-800 dark:to-gray-400">
            {" "}
            {s("skill_title")}
          </p>
          <p className="text-lg mb-2 text-gray-700 dark:to-gray-400">
            {" "}
            {s("skill_sub")}
          </p>
        </div>

        <article className=" mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6 lg:gap-12 lg:gap-y-12">
          {loading && skillData.length === 0 ? (
            // <div className="text-xl text-gray-700 dark:text-white">
            //   {locale === "id" ? "صبر کنید..." : "is loading..."}
            // </div>
            <div className="loader"></div>
          ) : (
            skillData?.map((item: any) => (
              <div
                className="bg-gray-100 w-full shadow-lg p-6 rounded-md"
                key={item?._id}
              >
                <div className="flex  items-center justify-between rounded-none overflow-visible">
                  <div className="flex flex-col gap-1 w-full">
                    <p className="font-bold text-xs text-blue-900">
                      {locale == "en" ? item?.enType : item?.faType}
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

export default Skills;
