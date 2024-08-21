import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Fragment, ReactNode } from "react";
import { Link } from "navigation";
type PriceCardProps = {
  title: string;
  price: number;
  children?: ReactNode;
  variant: "primary" | "secondary";
  noService?: string[] | undefined;
  services: string[];
  book: string;
};

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  services,
  noService,
  variant,
  book,
}) => {
  return (
    <div className={`w-auto mb-10 flex flex-col flex-1  CardBackground2`}>
      <div
        className={`h-[300px] justify-center items-center flex flex-col ${
          variant === "primary" ? "CardBackground " : "CardBackground2"
        }`}
      >
        <h1
          className={`text-[90px] font-bold   leading-none relative  ${
            variant === "primary" ? "text-primaryColor" : "text-secondaryColor"
          }`}
        >
          {price}
          <p className="absolute top-[-5px] left-[-35px] text-5xl font-extralight ">
            $
          </p>
        </h1>
        <h2
          className={`z-10  font-semi-bold${
            variant === "primary" ? "text-primaryColor" : " text-secondaryColor"
          }`}
        >
          {title}
        </h2>
      </div>
      {/* <Separator /> */}
      <div
        className={` flex flex-col justify-between    z-10  text-primaryColor font-semibold h-full  text-sm bg-primaryBackground `}
      >
        <div className="flex flex-col gap-1 mt-5">
          {services.map((service, index) => {
            return (
              <Fragment key={index}>
                <div className="flex gap-1 items-center m-4 text-center font-light">
                  <p className="   text-primaryColor w-[90%] ">{service}</p>
                </div>
                <Separator className={`max-w-[300px] mx-auto  bg-gray-200`} />
              </Fragment>
            );
          })}

          {/* {noService?.map((service, index) => {
            return (
              <Fragment key={index}>
                <div className="flex gap-1 items-center ml-4 text-primaryColor/60">
                  <X className="  leading-none w-[10%] h-[20px]  self-center " />
                  <p className="    w-[90%] ">{service}</p>
                </div>
                <Separator
                  className={`max-w-[300px] mx-auto ${
                    variant === "primary" ? "bg-gray-200" : "bg-gray-50/40"
                  }`}
                />
              </Fragment>
            );
          })} */}
        </div>
        <Link href="/contact" className="w-[60%]  self-center mb-10">
          <Button className="w-full" variant={"default"}>
            {book}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
