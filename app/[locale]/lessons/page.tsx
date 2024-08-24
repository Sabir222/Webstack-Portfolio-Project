import PageHeader from "@/components/PageHeader";
import NavigationButtons from "@/components/services/NavigationButtons";
import KiteServices from "@/components/services/kitesurf/KiteServices";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    keywords:
      "Kitesurf lessons Dakhla, Kitesurfing camp Dakhla, Kitesurfing lessons near me, Kitesurfing schools, Kite sailing lessons, Wingfoil lessons Dakhla, Surfing lessons Dakhla, Private kitesurf lessons, Group kitesurf lessons, Learn wingfoil Dakhla, Cours de kitesurf Dakhla, Stage kitesurf Dakhla, Cours kitesurf, Dakhla kitesurf camp, Ecole de wingfoil, Cours kitesurf, Stage wing foil, Cours de wingfoil, Cours surf Dakhla, Cours de groupe, Cours particuliers",
    title: m("lessons"),
    description: m("lessonsd"),
    alternates: {
      canonical: `/lessons`,
      languages: {
        en: "/en/lessons",
        fr: "/fr/lessons",
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
        <NavigationButtons activeButton="kiteSurf" />
        <KiteServices />
      </div>
    </div>
  );
};

export default Page;
