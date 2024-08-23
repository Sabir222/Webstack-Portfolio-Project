"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
type ServiceCardProps = {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
  services: Array<{
    service: string;
    details: string[];
  }>;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  price,
  services,
  description,
}) => {
  const router = useRouter();
  const [detailed, setDetails] = useState<boolean>(false);
  const boxShadowStyle = {
    boxShadow: "rgba(0, 0, 0, 0.26) 0px 1px 12px",
    backgroundColor: "#ffffff",
  };
  const t = useTranslations("Book");
  return (
    <div className="">
      <div className=" flex flex-col  " style={boxShadowStyle}>
        <div className="  w-full bg-gradient-to-r from-secondaryColor  to-primaryColor">
          <div className="relative h-[350px] w-full mt-2 overflow-hidden">
            <Image
              quality={100}
              loading="lazy"
              className="h-[350px] object-cover image-placeholder  absolute"
              fill
              src={imageSrc}
              alt="lesson image"
              sizes="(min-width: 1320px) 600px, (min-width: 1040px) 600px, (min-width: 640px) calc(46.84vw - 36px), calc(100vw - 80px)"
            />
          </div>
        </div>
        <div className="px-4">
          <div className=" flex flex-col gap-5 mt-6">
            <p className="text-2xl text-secondaryColor font-semibold">
              {title}
            </p>
            <div className=" text-primaryColor flex gap-1">
              <p className="text-2xl leading-none ">{price}</p>
            </div>
            <p className="min-h-[190px]">{description}</p>
          </div>
          {/*     Services */}
          {/* <div
            className={`  text-primaryColor w-full h-auto  my-8 ${
              detailed === true ? "hidden" : "block"
            } flex flex-col gap-4 `}
          >
            {services.map((service, key) => {
              return (
                <div className="flex gap-2" key={key}>
                  <div>
                    <Check size="15px" />
                  </div>
                  <p className="leading-none ">{service.service}</p>
                </div>
              );
            })}
          </div> */}
          {/*    Detailed services */}
          <div
            className={`  text-primaryColor h-auto w-full my-4 ${
              detailed === false ? "hidden" : "block"
            } flex flex-col gap-4 `}
          >
            {services.map((service, key) => {
              return (
                <div key={key} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div>
                      <Check size="15px" />
                    </div>
                    <p className="leading-none ">{service.service}</p>
                  </div>
                  <ul className="list-disc pl-10 text-primaryColor/60 text-sm gap-1 flex flex-col">
                    {service.details.map((detail, key) => {
                      return <li key={key}>{detail}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div>
            <Button
              className="rounded-full mr-auto mb-7"
              onClick={() => router.push("/booking")}
            >
              {t("Book")}
            </Button>

            <button
              className="flex items-center gap-2 text-secondaryColor mr-auto mt-auto font-semibold mb-4 "
              onClick={() => setDetails(!detailed)}
            >
              {detailed ? "Less details" : "More details"}
              <ArrowDown size="15px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
