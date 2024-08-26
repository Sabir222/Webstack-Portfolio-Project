import { ReactNode } from "react";

type SocialsProps = React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
};

const Socials: React.FC<SocialsProps> = ({ children }) => {
  return <button className="rounded-full text-primaryColor bg-secondaryColor p-1 hover:text-secondaryColor hover:bg-primaryColor ease-in-out duration-200">{children}</button>;
};

export default Socials;
