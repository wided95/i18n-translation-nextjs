import { useTranslations } from "next-intl";
export async function generateMetaData() {
  const t = await useTranslations("contact");

  return {

     title: t("tab-title-contact")

     };
}
const Contact = () => {
  const t = useTranslations("contact");
  return <p className="mt-10 text-center">{t("title")}</p>;
};

export default Contact;
