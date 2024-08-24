import PageHeader from "@/components/PageHeader";
import NavigationButtons from "@/components/services/NavigationButtons";
import KiteServices from "@/components/services/kitesurf/KiteServices";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    title: m("kite"),
    keywords:
      "Kitesurf lessons Dakhla, Private kitesurfing classes, Group kitesurf courses, Kitesurf instructor Dakhla, Kitesurfing for beginners, Dakhla Kitesurf, Learn to kitesurf Dakhla, Kitesurf school Morocco, Stage Kitesurf, IKO certified kitesurfing, Cours de kitesurf Dakhla, Cours de kitesurf privés, Cours de kitesurf en groupe, Instructeur de kitesurf Dakhla, Kitesurf pour débutants, Kitesurf Dakhla, Apprendre le kitesurf à Dakhla, École de kitesurf Maroc, Stage de kitesurf, Kitesurf certifié IKO",
    description: m("kited"),
    alternates: {
      canonical: `/lessons/kitesurf`,
      languages: {
        en: "/en/lessons/kitesurf",
        fr: "/fr/lessons/kitesurf",
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
