import { unstable_setRequestLocale } from "next-intl/server";
import AboutUsContent from "@/components/aboutUs/AboutUsContent";
import HeroImage from "@/components/hero/HeroImage";
import Lessons from "@/components/lessons/Lessons";
import SvgSection from "@/components/SvgSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    keywords:
      "Kitesurf Dakhla, Kitesurf Morocco, Kite house Dakhla, Dakhla kite, Dakhla kitesurf camp, Kite surfing schools, Wingfoil school Dakhla, Wingfoil Morocco, Wingfoil Dakhla, Surfing in Dakhla, Kitesurf Dakhla, Kitesurf Maroc, Kite house Dakhla, Kite Dakhla, Ecole de kitesurf, Stage kitesurf dakhla, Ecole Wingfoil Dakhla, Wingfoil Maroc, Wingfoil Dakhla, Dakhla surf",
    title: m("home"),
    description: m("homed"),
    alternates: {
      canonical: `/`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <HeroImage />
      <AboutUsContent />
      <Lessons />
      {/* <Prices /> */}
      <SvgSection />
    </main>
  );
}
