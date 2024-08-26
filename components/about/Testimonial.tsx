"use client";
import { useState } from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const t = useTranslations("Testimonials");
  const testimonials = [
    {
      text: t("t1"),
      author: t("n1"),
    },
    {
      text: t("t2"),
      author: t("n2"),
    },
    {
      text: t("t3"),
      author: t("n3"),
    },
    {
      text: t("t4"),
      author: t("n4"),
    },
  ];

  return (
    <div className="bg-primaryBackground py-24 ">
      <Container>
        <div className="  p-4 flex  justify-between items-center text-primaryColor flex-col lg:flex-row gap-4">
          <div className="text-5xl font-medium">Testimonials</div>

          <div className="relative overflow-hidden h-32 w-full lg:w-1/2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transform flex justify-center flex-col text-center ${
                  index === currentIndex
                    ? "translate-y-0 opacity-100 transition-all duration-1000 ease-in-out"
                    : "translate-y-full opacity-0"
                }`}
              >
                <p className="md:text-lg text-sm font-bold">{`"${testimonial.text}"`}</p>
                <p className="text-lg italic font-medium text-secondaryColor">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
          <div className=" mt-4  ">
            <div className="hidden lg:flex flex-col">
              <button
                className=" px-4 py-2 rounded ml-2 transition-all duration-300 text-primaryColor "
                onClick={handlePrevious}
              >
                <ChevronUp />
              </button>
              <button
                className=" text-primaryColor  px-4 py-2 rounded ml-2 transition-all duration-300"
                onClick={handleNext}
              >
                <ChevronDown />
              </button>
            </div>
            <div className="lg:hidden flex ">
              <button
                className=" px-4 py-2 rounded ml-2 transition-all duration-300 text-primaryColor "
                onClick={handlePrevious}
              >
                <ChevronLeft />
              </button>
              <button
                className=" text-primaryColor  px-4 py-2 rounded ml-2 transition-all duration-300"
                onClick={handleNext}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialCarousel;
