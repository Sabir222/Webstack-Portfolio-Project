import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import TagButton from "./TagButton";
import { useTranslations } from "next-intl";

type BlogCardProps = {
  post: Post;
  imageSrc: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ post, imageSrc }) => {
  const t = useTranslations("SelectLanguage");
  const language = t("language").toLowerCase();

  return (
    <div className="rounded-lg w-full  backdrop-blur-sm hover:bg-white/30 flex flex-col p-4 text-white gap-4 ease-in-out duration-500 mb-10">
      <div className="">
        <Link
          href={
            post.url.startsWith(`/${language}`)
              ? post.url
              : `/${language}${post.url}`
          }
        >
          <div className="relative h-[450px] overflow-hidden rounded-2xl w-full">
            <Image
              src={imageSrc}
              loading="lazy"
              fill
              alt="blog image"
              className=" object-cover  image-placeholder  absolute "
              sizes="(min-width: 1480px) 626px, (min-width: 780px) calc(45.59vw - 40px), calc(100vw - 96px)"
            />
          </div>
        </Link>
      </div>

      <Link
        className="text-3xl font-semibold leading-snug hover:underline"
        href={post.url}
      >
        {post.title}
      </Link>

      <div className="flex gap-3 flex-wrap">
        {post.tags.map((tag, idx) => (
          <TagButton key={idx} tag={tag} />
        ))}
      </div>
      <time dateTime={post.date} className="text-sm italic text-gray-300 mb-4">
        {new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(post.date))}
      </time>
    </div>
  );
};

export default BlogCard;
