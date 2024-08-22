"use client";
import Title from "../Title";
import LessonSlider from "./LessonSlider";
import { useTranslations } from "next-intl";

type LessonsProps = {};

const Lessons: React.FC<LessonsProps> = ({}) => {
  const t = useTranslations("Lessons");

  return (
    <div className="bg-primaryBackground  ">
      <div className="flex lg:flex-row h-full flex-col justify-center items-center md:px-8 py-20 lg:py-32">
        <div className="text-center lg:text-start  px-8 pb-10 lg:pb:0">
          <Title h1={t("h1")} h2={t("h2")} h3={t("h3")} />
        </div>
        <div className="lg:w-[75%] w-full">
          <LessonSlider />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
