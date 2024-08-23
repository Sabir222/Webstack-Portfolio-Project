import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-[32px]  max-w-[1200px] mx-auto ">{children}</div>;
};

export default Container;
