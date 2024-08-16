"use client";
import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNavBar";
import Logo from "../Logo";
import { Link } from "navigation";
import { useTranslations } from "next-intl";
import SelectLanguage from "./SelectLanguage";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-primaryColor" : "bg-primaryColor/25"
      } fixed right-0 left-0 ease-in-out duration-300  z-20 h-[80px] flex `}
    >
      <div className=" py-4 px-4 md:px-16 flex items-center justify-between mx-auto  max-w-[2000px] w-full">
        <Logo />
        <ul className="lg:flex gap-16 justify-between items-center max-w-5xl mx-auto hidden font-semibold ">
          <Link href="/">
            <li
              className={`cursor-pointer text-white hover:text-secondaryColor ease-in-out duration-150 p-2 }`}
            >
              {t("home")}
            </li>
          </Link>
          <Link href="/lessons/kitesurf">
            <li
              className={`cursor-pointer text-white hover:text-secondaryColor ease-in-out duration-150 p-2 ${
                path.includes("services") ? "text-secondaryColor" : "text-white"
              }`}
            >
              {t("services")}
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`cursor-pointer  hover:text-secondaryColor ease-in-out duration-150 p-2 ${
                path.includes("blog") ? "text-secondaryColor" : "text-white"
              }`}
            >
              {t("blog")}
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`cursor-pointer  hover:text-secondaryColor ease-in-out duration-150 p-2 ${
                path.includes("about") || path.includes("a-propos")
                  ? "text-secondaryColor"
                  : "text-white"
              }`}
            >
              {t("about")}
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`cursor-pointer text-white hover:text-secondaryColor ease-in-out duration-150 p-2 ${
                path.includes("contact") ? "text-secondaryColor" : "text-white"
              }`}
            >
              {t("contact")}
            </li>
          </Link>
        </ul>
        <div className="hidden lg:block">
          <SelectLanguage />
        </div>
        <div className="lg:hidden justify-center items-center flex gap-7">
          <SelectLanguage />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
