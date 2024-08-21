"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

type PeopleProps = {
  onPeopleChange: (people: number) => void;
};

const People: React.FC<PeopleProps> = ({ onPeopleChange }) => {
  const [count, setCount] = useState(1);
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const t = useTranslations("booking");

  useEffect(() => {
    // Call the onPeopleChange callback with the new count
    onPeopleChange(count);
  }, [count, onPeopleChange]);

  return (
    <div>
      <h1 className="text-center text-xl text-primaryColor/90 mb-3">
        {t("people")}
      </h1>
      <div className="flex items-center justify-center space-x-2 ">
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
            {count === 1 ? t("person") : t("people2")}
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

export default People;
