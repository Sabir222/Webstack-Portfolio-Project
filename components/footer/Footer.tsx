"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Socials from "./Socials";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Container from "../Container";
import Logo from "../Logo";
import { useRouter } from "navigation";
import Image from "next/image";
import Link from "next/link";
type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  const t = useTranslations("Footer");

  const date = new Date().getFullYear();
  const router = useRouter();
  return (
    <div className="bg-primaryColor text-white">
      <Container>
        <div className=" pt-32 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-8 items-center justify-start lg:items-start">
            <Logo />
            <p className="text-center lg:text-start">{t("p1")}</p>
            <div className="flex gap-2">
              <Socials>
                <Instagram size={15} />
              </Socials>
              <Socials>
                <Twitter size={15} />
              </Socials>
              <Socials>
                <Facebook size={15} />
              </Socials>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center py-10 lg:py-0 lg:mx-32">
            <p className="mb-8 text-2xl font-semibold">{t("p2")}</p>
            <div onClick={() => router.push("/")} className="cursor-pointer">
              {t("home")}
            </div>
            <Separator className="my-4 " />
            <div
              onClick={() => router.push("/about")}
              className="cursor-pointer"
            >
              {t("about")}
            </div>
            <Separator className="my-4" />
            <div
              onClick={() => router.push("/lessons/kitesurf")}
              className="cursor-pointer"
            >
              {t("services")}
            </div>
            <Separator className="my-4" />
            <div
              onClick={() => router.push("/contact")}
              className="cursor-pointer"
            >
              {t("contact")}
            </div>
            <Separator className="my-4" />
            <div
              onClick={() => router.push("/blog")}
              className="cursor-pointer"
            >
              {t("blog")}
            </div>
            <Separator className="my-4" />
            <div
              onClick={() => router.push("/gallery")}
              className="cursor-pointer"
            >
              {t("gallery")}
            </div>
            <Separator className="my-4" />
          </div>
          <div className="flex-1 py-10 lg:py-0 flex flex-col  ">
            <p className="mb-8 text-2xl font-semibold text-center">Instagram</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="image-placeholder h-[170px]">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="https://images.unsplash.com/photo-1492611206631-dc5e6e6df1fe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height={300}
                    width={300}
                    className="object-cover h-full w-full"
                    alt="instagram image"
                  />
                </Link>
              </div>
              <div className="image-placeholder h-[170px]">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="https://images.unsplash.com/photo-1667143297980-8b79052ca61f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height={300}
                    width={300}
                    className="object-cover h-full w-full"
                    alt="instagram image"
                  />
                </Link>
              </div>
              <div className="image-placeholder h-[170px]">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="https://images.unsplash.com/photo-1530092064935-c3626e1b65dd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height={300}
                    width={300}
                    className="object-cover h-full w-full"
                    alt="instagram image"
                  />
                </Link>
              </div>
              <div className="image-placeholder h-[170px]">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="https://images.unsplash.com/photo-1533733740154-c5bb441ceee6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height={300}
                    width={300}
                    className="object-cover h-full w-full"
                    alt="instagram image"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[32px]">
          <Separator className="max-w-[1000px] mx-auto my-12" />
          <p className="text-center  py-8">Copyright ©{date} GoKiteSurf.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
