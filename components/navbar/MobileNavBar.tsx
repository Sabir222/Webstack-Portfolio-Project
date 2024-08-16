"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "navigation";
import { useTranslations } from "next-intl";
export function MobileNav() {
  const t = useTranslations("Navbar");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu size={40} className="text-white" />
        </button>
      </SheetTrigger>

      <SheetContent side={"left"} className="flex justify-center items-center">
        <ul className="flex-col  justify-between h-[500px] mt-8 pl-16 text-xl">
          <li className="cursor-pointer text-primaryColor hover:text-secondaryColor ease-in-out duration-150 p-2 ">
            <Link href="/">
              <SheetClose>{t("home")}</SheetClose>
            </Link>
          </li>

          <li className="cursor-pointer text-primaryColor hover:text-secondaryColor ease-in-out duration-150 p-2 mt-8">
            <Link href="/lessons/kitesurf">
              <SheetClose>{t("services")}</SheetClose>
            </Link>
          </li>
          <li className="cursor-pointer text-primaryColor hover:text-secondaryColor ease-in-out duration-150 p-2 mt-8">
            <Link href="/blog">
              <SheetClose>{t("blog")}</SheetClose>
            </Link>
          </li>
          <li className="cursor-pointer text-primaryColor hover:text-secondaryColor ease-in-out duration-150 p-2 mt-8">
            <Link href="/about">
              <SheetClose>{t("about")}</SheetClose>
            </Link>
          </li>
          <li className="cursor-pointer text-primaryColor hover:text-secondaryColor ease-in-out duration-150 p-2 mt-8">
            <Link href="/contact">
              <SheetClose>{t("contact")}</SheetClose>
            </Link>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
