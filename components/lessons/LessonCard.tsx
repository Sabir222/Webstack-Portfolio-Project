"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "@/navigation";
type LessonCardProps = {
  title: string;
  description: string;
  src: string;
  lesson: string;
  bookNow: string;
};

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  src,
  lesson,
  bookNow,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col  h-[650px]  ">
      <div className="h-[50%]   overflow-hidden w-full">
        <Image
          quality={50}
          src={src}
          width={800}
          height={800}
          alt="cardImage"
          className="object-cover  image-placeholder h-full w-full"
        />
      </div>
      <div className="h-[50%] bg-white flex justify-center items-center p-1">
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="bg-secondaryColor hover:bg-primaryBackground px-4 py-1 text-primaryColor ease-in-out duration-200">
            {lesson}
          </div>
          <h1 className="text-center text-primaryColor text-2xl font-semibold">
            {title}
          </h1>
          <h2 className="text-center text-primaryColor/50 text-lg mx-1">
            {description}
          </h2>
          <div className="w-full px-8">
            <div
              onClick={() => router.push(`/lessons/kitesurf`)}
              className="font-light text-primaryColor bg-gradient-to-r from-secondaryColor to-primaryBackground w-full p-2  rounded-full relative text-center cursor-pointer hover:from-primaryBackground hover:to-secondaryColor hover:text-white ease-in-out duration-500 transition-all"
            >
              {bookNow}
              <div className="p-3 rounded-full bg-secondaryColor absolute flex justify-center items-center top-0 right-0 bottom-0  text-white ">
                <Play size={15} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
