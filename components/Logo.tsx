"use client";
import Image from "next/image";
import { useRouter } from "navigation";
type LogoProps = {};

const Logo: React.FC<LogoProps> = ({}) => {
  const router = useRouter();
  return (
    <Image
      className="cursor-pointer"
      src="/logo.png"
      height={80}
      width={80}
      alt="logo"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
