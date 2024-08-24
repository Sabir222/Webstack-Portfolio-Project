import PageHeader from "@/components/PageHeader";
import NavigationButtons from "@/components/services/NavigationButtons";
import WindFoilServices from "@/components/services/windFoil/WindFoil";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    keywords:
      "Wingfoil lessons Dakhla, Wingfoil school Morocco, Private wingfoil classes, Group wingfoil lessons, Wingfoil Dakhla, Wingfoil instructor Dakhla, Learn wingfoil Dakhla, Wingfoil for beginners, Wing foil camp, Best wingfoil spots Dakhla, Cours de wingfoil Dakhla, École de wingfoil Maroc, Cours de wingfoil privés, Cours de wingfoil en groupe, École de wingfoil Dakhla, Instructeur de wingfoil Dakhla, Apprendre le wingfoil à Dakhla, Wingfoil pour débutants, Stage de wingfoil, Wingfoil Dakhla",
    title: m("wing"),
    description: m("wingd"),
    alternates: {
      canonical: `/lessons/wingfoil`,
      languages: {
        en: "/en/lessons/wingfoil",
        fr: "/fr/lessons/wingfoil",
      },
    },
  };
}

type pageProps = {};

const Page: React.FC<pageProps> = ({}) => {
  const t = useTranslations("LessonPage");
  return (
    <div>
      <PageHeader title={t("heading")} description={t("description")} />
      <div className=" bg-primaryColor">
        <div className="text-center py-10 text-7xl font-medium text-secondaryColor">
          {t("title")}
        </div>
        <NavigationButtons activeButton="wingfoil" />
        <WindFoilServices />
      </div>
    </div>
  );
};

export default Page;
