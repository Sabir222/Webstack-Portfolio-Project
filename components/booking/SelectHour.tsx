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
import { ChevronDownIcon, Clock11 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function SelectTime({
  onHourChange,
}: {
  onHourChange: (lesson: string) => void;
}) {
  const t = useTranslations("booking");

  const [position, setPosition] = useState(t("time"));
  const hours = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full  bg-secondaryColor px-2 py-2 flex justify-between items-center text-primaryColor">
          <p>{position}</p>
          <Clock11 size={15} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>{t("time")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          className="w-full"
        >
          {hours.map((hour) => {
            return (
              <DropdownMenuRadioItem
                key={hour}
                value={hour}
                onClick={() => onHourChange(hour)}
              >
                {hour}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
