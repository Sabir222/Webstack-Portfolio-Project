"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

type PeopleProps = {
  onHoursChange: (hour: number) => void;
};

const Hours: React.FC<PeopleProps> = ({ onHoursChange }) => {
  const [count, setCount] = useState(1);
  const t = useTranslations("booking");

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (count < 10) {
      const nextCount = getNextValidCount(count);
      setCount(nextCount);
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (count > 1) {
      const prevCount = getPrevValidCount(count);
      setCount(prevCount);
    }
  };

  const getNextValidCount = (currentCount: number) => {
    const validCounts = [1, 2, 4, 6, 8, 10];
    const currentIndex = validCounts.indexOf(currentCount);
    const nextIndex = currentIndex + 1;
    return validCounts[nextIndex];
  };

  const getPrevValidCount = (currentCount: number) => {
    const validCounts = [1, 2, 4, 6, 8, 10];
    const currentIndex = validCounts.indexOf(currentCount);
    const prevIndex = currentIndex - 1;
    return validCounts[prevIndex];
  };
  useEffect(() => {
    // Call the onPeopleChange callback with the new count
    onHoursChange(count);
  }, [count, onHoursChange]);

  return (
    <div>
      <h1 className="text-center text-xl text-primaryColor/90 mb-3">
        {t("hours")}
      </h1>
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-7xl font-bold tracking-tighter">{count}</div>
          <div className="text-[0.70rem] uppercase text-muted-foreground">
            {count === 1 ? t("hour") : t("hour2")}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={handleIncrement}
          disabled={count >= 10}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
    </div>
  );
};

export default Hours;
