import PageHeader from "@/components/PageHeader";
import NavigationButtons from "@/components/services/NavigationButtons";
import SurfServices from "@/components/services/surf/SurfServices";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    title: m("surf"),
    keywords:
      "Surf lessons Dakhla, Surfing classes Morocco, Private surf lessons, Group surf courses, Surf instructor Dakhla, Learn to surf Dakhla, Beginner surf lessons, Dakhla surfing, Surf school Dakhla, Cours de surf Dakhla, Cours de surf au Maroc, Leçons de surf privées, Cours de surf en groupe, Stage de surf Dakhla, Instructeur de surf Dakhla, Apprendre à surfer à Dakhla, Cours de surf pour débutants, Surf Dakhla, École de surf Dakhla",
    description: m("surfd"),
    alternates: {
      canonical: `/lessons/surf`,
      languages: {
        en: "/en/lessons/surf",
        fr: "/fr/lessons/surf",
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
        <NavigationButtons activeButton="surf" />
        <SurfServices />
      </div>
    </div>
  );
};

export default Page;
