"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function SelectLesson({
  onLessonChange,
}: {
  onLessonChange: (lesson: "wingfoil" | "surf" | "kitesurf") => void;
}) {
  const [position, setPosition] = useState("Lessons");
  const t = useTranslations("booking");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full  bg-secondaryColor px-5 py-2 justify-between flex text-primaryColor">
          <p>{position}</p>
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>{t("lesson")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          className="w-full"
        >
          <DropdownMenuRadioItem
            value="Kitesurf"
            onClick={() => onLessonChange("kitesurf")}
          >
            Kitesurf
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Surf"
            onClick={() => onLessonChange("surf")}
          >
            Surf
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Wingfoil"
            onClick={() => onLessonChange("wingfoil")}
          >
            Wingfoil
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
