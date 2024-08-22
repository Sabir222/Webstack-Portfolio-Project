"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslations } from "next-intl";
import LessonCard from "./LessonCard";

type LessonSliderProps = {};

const LessonSlider: React.FC<LessonSliderProps> = ({}) => {
  const t = useTranslations("Lessons");

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="px-[32px]">
        <LessonCard
          src="/ourservices/kitesurf/prive.jpg"
          title={t("t1")}
          description={t("d1")}
          lesson={`Kitesurf`}
          bookNow={t("b1")}
        />
      </div>
      <div className="px-[32px]">
        <LessonCard
          src="/ourservices/surf/private.jpeg"
          title={t("t2")}
          description={t("d2")}
          lesson={`Surf`}
          bookNow={t("b1")}
        />
      </div>
      <div className="px-[32px]">
        <LessonCard
          src="/lessonscards/card3/image3.jpg"
          title={t("t3")}
          description={t("d3")}
          lesson={`Kitesurf`}
          bookNow={t("b1")}
        />
      </div>
      <div className="px-[32px]">
        <LessonCard
          src="/lessonscards/card4/image4.jpg"
          title={t("t4")}
          description={t("d4")}
          lesson={`Kitesurf`}
          bookNow={t("b1")}
        />
      </div>
      <div className="px-[32px]">
        <LessonCard
          src="/lessonscards/card5/image5.jpg"
          title={t("t5")}
          description={t("d5")}
          lesson={`Wing foil`}
          bookNow={t("b1")}
        />
      </div>
    </Slider>
  );
};

export default LessonSlider;
