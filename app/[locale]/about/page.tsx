import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/about/AboutSection";
import Team from "@/components/about/Team";
import Testimonial from "@/components/about/Testimonial";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    title: m("about"),
    keywords:
      "About Blüboarding, Watersports school Dakhla, Kitesurfing school Morocco, Wingfoil center Dakhla, Surf school Dakhla, Mobile watersports school, Watersports instructors Dakhla, Learn kitesurfing Morocco, Adventure watersports Dakhla, Kitesurfing team Dakhla, À propos de Blüboarding, École de sports nautiques Dakhla, École de kitesurf Maroc, Centre de wingfoil Dakhla, École de surf Dakhla, École de sports nautiques mobile, Instructeurs de wingfoil Dakhla, Apprendre le kitesurf au Maroc, Kitesurf Dakhla, Équipe de kitesurf Dakhla",
    description: m("aboutd"),
    alternates: {
      canonical: `/about`,
      languages: {
        en: "/en/about",
        fr: "/fr/a-propos",
      },
    },
  };
}

const Page = () => {
  const t = useTranslations("aboutPage");
  return (
    <div>
      <PageHeader title={t("heading")} description={t("description")} />
      <AboutSection />
      <Testimonial />
      <Team />
    </div>
  );
};

export default Page;
