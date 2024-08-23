import { ReactNode } from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant: "primary" | "secondary";
  size: string;
};

const Button = ({ children, variant, size }: ButtonProps) => {
  const buttonClass =
    variant === "primary"
      ? "bg-secondaryColor  text-primaryColor px-8 py-2 border-[3px] border-secondaryColor hover:bg-primaryBackground ease-in-out duration-150 text-lg inline-block font-semi-bold w-auto"
      : "border-[3px] text-primaryColor py-2 px-8 border-secondaryColor bg-primaryBackground text-lg inline-block w-auto font-semibold";
  return <button className={`${buttonClass} ${size}`}>{children}</button>;
};

export default Button;
