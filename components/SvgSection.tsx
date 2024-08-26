import Container from "@/components/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";
type SvgSectionProps = {};

const SvgSection: React.FC<SvgSectionProps> = ({}) => {
  const t = useTranslations("svg");
  const data = [
    {
      h1: t("t1"),
      h2: t("d1"),
      svg: "svg/1.svg",
    },
    {
      h1: t("t2"),
      h2: t("d2"),
      svg: "svg/2.svg",
    },
    {
      h1: t("t3"),
      h2: t("d3"),
      svg: "svg/3.svg",
    },
    {
      h1: t("t4"),
      h2: t("d4"),
      svg: "svg/5.svg",
    },
  ];

  return (
    <div className=" py-20 bg-primaryBackground">
      <Container>
        {/* <h1 className="text-center pt-7 pb-20 text-3xl font-bold text-primaryColor">
          THE GOKITESURF CLUB ADVANTAGE
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-10 md:px-10">
          {data.map((i) => {
            return (
              <div
                key={i.svg}
                className="flex flex-col items-center text-center pt-10"
              >
                <Image src={i.svg} height={100} width={100} alt="benefits"  className="w-[80px] md:w-[100px]"/>
                <p className=" font-bold text-2xl text-center text-secondaryColor text-[18px] md:text-[22px]">
                  {i.h1}
                </p>
                <p className="text-center text-primaryColor/80 md:text-[15px] text-[12px]">
                  {i.h2}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default SvgSection;
