import { useLocale, useTranslations } from "next-intl";

const AboutUs = () => {

  const a = useTranslations("about");
  const locale = useLocale();
  
  console.log("locale =>", locale);
  return (
    <div>
      <h1>{a("title")}</h1>
      <div>{a("desc")}</div>
    </div>
  );
};
export default AboutUs;
