import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/gallery/Gallery";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: " GOKITESURF's Gallery",
  alternates: {
    canonical: ``,
  },
  // icons: {
  //   icon: "/favlogo.png",
  // },
};
const Page = () => {
  const t = useTranslations("GalleryPage");
  return (
    <div>
      <PageHeader title={t("heading")} description={t("description")} />
      <Gallery />
    </div>
  );
};

export default Page;
