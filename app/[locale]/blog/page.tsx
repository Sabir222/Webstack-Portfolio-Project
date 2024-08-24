import PageHeader from "@/components/PageHeader";
import { allPosts } from "contentlayer/generated";
import BlogCard from "@/components/blog/BlogCard";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const m = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.bluboarding.com"),
    title: m("blog"),
    keywords:
      "Dakhla Kitesurf blog, Kitesurfing news Dakhla, Wingfoil updates Morocco, Surf tips Dakhla, Local Dakhla adventures, Watersports tips blog, Dakhla travel guide, Morocco kitesurfing blog, Kitesurfing tips Morocco, Desert adventures Dakhla, Blog de wingfoil à Dakhla, Actualités du kitesurf Dakhla, Actualités du wingfoil Maroc, Conseils de surf Dakhla, Aventures locales à Dakhla, Blog des conseils de sports nautiques, Guide de voyage Dakhla, Blog du kitesurf au Maroc, Conseils de kitesurf Maroc, Aventures désertiques à Dakhla",
    description: m("blogd"),
    alternates: {
      canonical: `/blog`,
      languages: {
        en: "/en/blog",
        fr: "/fr/blog",
      },
    },
  };
}

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const t = useTranslations("BlogPage");
  return (
    <div className="bg-primaryColor min-h-screen">
      <PageHeader title={"Blogs"} description={t("description")} />
      <div className="container py-20  gap-5 grid grid-cols-1 md:grid-cols-2">
        {posts.map((post, idx) => (
          <BlogCard key={idx} post={post} imageSrc={post.image} />
        ))}
      </div>
    </div>
  );
}
