import { useTranslations } from "next-intl";
export async function generateMetaData() {
  const t = await useTranslations("about");
  return { title: t("tab-title-about") };
}
const About = () => {
  const t = useTranslations("about");
  return <p className="mt-10 text-center">{t("title")}</p>;
};

export default About;
