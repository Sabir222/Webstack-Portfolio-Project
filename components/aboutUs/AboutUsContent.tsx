"use client";
import Image from "next/image";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import Title from "../Title";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

type AboutUsContentProps = {};

const AboutUsContent: React.FC<AboutUsContentProps> = ({}) => {
  const t = useTranslations("AboutUsContent");
  const router = useRouter();
  return (
    <div className="backgroundContainer">
      <Container>
        <div className="flex-col lg:flex-row justify-center items-center p-4 flex py-20 lg:py-32">
          <div className="lg:w-[50%] flex-col justify-center items-center text-center lg:text-left">
            <Title h1={t("h1")} h2={t("h2")} h3={t("h3")} />
            <div className="mt-14">
              <div className="flex flex-1">
                <div className=" min-h-[1em] w-[6px] self-stretch bg-secondaryColor mr-10 hidden lg:block"></div>
                <div className="flex-col ">
                  <p className="pl-6 text-xl font-light text-primaryColor/70">
                    {t("p1")}
                  </p>
                  <p className="pl-6 text-xl font-light text-primaryColor/70 mt-3">
                    {t("p2")}
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="lg:flex-row flex-col gap-6 mt-14 flex">
              <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
                <Button
                  className="w-[200px]"
                  onClick={() => router.push("/lessons/kitesurf")}
                >
                  {t("b1")}
                </Button>
                <Button
                  variant={"outline"}
                  className="w-[200px]"
                  onClick={() => router.push("/about")}
                >
                  {t("b2")}
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:ml-32 mt-16 ">
            <Image
              className="object-cover h-[500px] "
              src="/aboutussection/aboutsection.jpg"
              height={500}
              width={500}
              quality={50}
              alt="about us image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsContent;
