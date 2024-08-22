"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "@/navigation";
import heroImage from "@/public/hero/heroimage.jpg";
const HeroImage = () => {
  const t = useTranslations("HeroImage");
  const router = useRouter();
  const handleClick = () => {
    router.push("/lessons/kitesurf");
    console.log("lol");
  };
  return (
    <div className=" lg:h-[100vh] h-[70vh] flex justify-center items-center lg:justify-start  relative">
      <Image
        src={heroImage}
        width={heroImage.width}
        quality={50}
        rel="preload"
        height={heroImage.height}
        loading="eager"
        fetchPriority="high"
        alt="Hero image"
        priority
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="flex flex-col justify-start items-center text-white lg:items-start max-w-[1200px] px-[32px] mx-auto lg:leading-none z-10">
        <h1 className="text-bold text-[20px] lg:text-[40px]">{t("h1")}</h1>
        <h2 className="font-bold text-[35px] md:text-[90px] mt-8 lg:text-[130px] xl:text-[152px] whitespace-no-wrap	leading-none">
          {t("h2")}
        </h2>
        {/*
        <h3 className="text-bold text-[20px] text-primaryColor lg:text-[30px] self-end ">
          {t("h3")}
        </h3>
        */}
        <button
          className=" mt-10 bg-secondaryColor py-4 px-6 text-primaryColor hover:bg-primaryBackground ease-in-out duration-150 border-2 border-secondaryColor font-medium"
          onClick={handleClick}
        >
          {t("b1")}
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
//
