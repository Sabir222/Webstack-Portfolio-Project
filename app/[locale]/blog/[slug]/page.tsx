import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
export const dynamic = "force-dynamic";
// import Link from "next/link";
// import FakeComponent from "@/app/components/FakeComponent";
// ^ This component is just a placeholder, it will give you an error, remove it.

const mdxComponents: MDXComponents = {
  // FakeComponent,
  // a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="bg-primaryColor">
      <PageHeader title={post.title} description="" />

      <article className="mx-auto max-w-[1100px] py-8  text-white/90  prose-xl prose-h1:text-secondaryColor prose-h2:text-white prose-h2:font-semibold prose-h1:font-bold prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-xl prose-h3:underline prose-h3:text-white">
        <Container>
          <MDXContent components={mdxComponents} />
        </Container>
      </article>
    </main>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
