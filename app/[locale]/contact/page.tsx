import PageHeader from "@/components/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/contactForm";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    keywords:
      "Contact Blüboarding, Book kitesurf lessons Dakhla, Watersports bookings Dakhla, Kitesurfing inquiries Dakhla, Surf lessons contact, Wingfoil lessons contact, Kitesurf school contact, Watersports school Morocco, Schedule kitesurf lessons, Contact wingfoil school, Contact Blüboarding, Réserver des cours de kitesurf Dakhla, Réservations de wingfoil Dakhla, Demandes de kitesurf Dakhla, Contact pour leçons de surf, Contact pour leçons de wingfoil, Contact école de kitesurf, École de sports nautiques Maroc, Programmer des leçons de kitesurf, Contacter école de wingfoil",
    title: m("contact"),
    description: m("contactd"),
    alternates: {
      canonical: `/contact`,
      languages: {
        en: "/en/contact",
        fr: "/fr/contact",
      },
    },
  };
}

const Page = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="">
      <PageHeader title={t("heading")} description={t("description")} />
      <ContactInfo />
      <ContactForm />
      {/* <Map /> */}
    </div>
  );
};

export default Page;
