"use client";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { DatePicker } from "./DatePick";
import { SelectLesson } from "./SelectLesson";
import People from "./People";
import { useEffect, useState } from "react";
import Hours from "./Hours";
import { Separator } from "../ui/separator";
import { SelectTime } from "./SelectHour";
import { wingPrices, kitePrices, surfPrices } from "./prices";
import { useRouter } from "@/navigation";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
type BookingModalProps = {};

const BookingModal: React.FC<BookingModalProps> = ({}) => {
  const [people, setPeople] = useState(1);
  const [time, setTime] = useState<string | null>(null);
  const [hours, setHours] = useState<number>(1);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [total, setTotal] = useState(0);
  const [name, setName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [info, setInfo] = useState("");
  const [lesson, setLesson] = useState<"wingfoil" | "surf" | "kitesurf" | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  ///
  const t = useTranslations("booking");
  //calculate the price of lessons
  const calculateTotal = (
    lesson: string | null,
    hours: number,
    people: number
  ) => {
    let price = 0;
    if (lesson === "wingfoil") {
      if (people === 1) {
        price = wingPrices.solo[hours];
      } else if (people === 2) {
        price = wingPrices.duo[hours] * 2;
      } else if (people > 2) {
        price = wingPrices.group[hours] * people;
      }
    } else if (lesson === "kitesurf") {
      // Add pricing logic for kitesurf
      if (people === 1) {
        price = kitePrices.solo[hours];
      } else if (people === 2) {
        price = kitePrices.duo[hours] * 2;
      } else if (people > 2) {
        price = kitePrices.group[hours] * people;
      }
    } else if (lesson === "surf") {
      // Add pricing logic for surf
      if (people === 1) {
        price = surfPrices.solo[hours];
      } else if (people === 2) {
        price = surfPrices.duo[hours] * 2;
      } else if (people > 2) {
        price = surfPrices.group[hours] * people;
      }
    }

    setTotal(price);
  };

  // format date

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`
    : "";
  // Handler to update the selected lesson
  const handleLessonChange = (lesson: "wingfoil" | "surf" | "kitesurf") => {
    setLesson(lesson);
    calculateTotal(lesson, hours, people);
  };

  //handle time change

  const onHourChange = (hour: string) => {
    setTime(hour);
    calculateTotal(lesson, parseInt(hour), people);
  };
  //handle update the people
  const handlePeopleChange = (people: number) => {
    setPeople(people);
    calculateTotal(lesson, hours, people);
  };
  const handleHoursChange = (hours: number) => {
    setHours(hours);
  };
  ////

  const handlePhoneChange = (value: string | undefined) => {
    setPhoneNumber(value);
  };
  ////

  useEffect(() => {
    calculateTotal(lesson, hours, people);
  }, [lesson, hours, people]);

  console.log("Selected Lesson:", {
    lesson,
    name,
    people,
    hours,
    time,
    formattedDate,
    info,
    total,
    email,
    phoneNumber,
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      lesson,
      name,
      people,
      hours,
      time,
      formattedDate,
      info,
      total,
      email,
      phoneNumber,
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/thankyou");
        toast.success(t("toast"));
        console.log("Data sent successfully!");
      } else {
        setLoading(false);
        toast.error(t("error"));
        console.error("Failed to send data to the backend.");
      }
    } catch (error) {
      setLoading(false);
      toast.success(t("toast"));
      console.error("Error sending data:", error);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className=" bg-primaryColor/90 backdrop-blur-md z-40 justify-center items-center flex overflow-y-auto py-44 ">
        <div className="bg-primaryBackground rounded-xl p-6 mx-4 flex flex-col gap-4 w-full max-w-[1100px]  ">
          <h1 className="text-xl text-primaryColor font-bold">{t("t")}</h1>
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-6 flex-1">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                className="w-full h-9 border-2 border-secondaryColor px-5 "
                placeholder={t("name")}
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full h-9 border-2 border-secondaryColor px-5 "
                placeholder="Email"
              />

              <PhoneInput
                className="border-2 border-secondaryColor h-10 bg-white px-2"
                placeholder={t("phone")}
                value={phoneNumber}
                onChange={handlePhoneChange}
              />

              <div className="flex gap-2">
                <div className="w-[70%]">
                  <DatePicker
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                  />
                </div>
                <div className="w-[30%]">
                  <SelectTime onHourChange={onHourChange} />
                </div>
              </div>

              <div>
                <SelectLesson onLessonChange={handleLessonChange} />
              </div>
              <textarea
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                name=""
                className="w-full border-2 border-secondaryColor p-3"
                placeholder={t("info")}
                id="text"
                cols={30}
                rows={4}
              ></textarea>
            </div>
            <div className="flex-1 flex flex-col gap-20 ">
              <People onPeopleChange={handlePeopleChange} />
              <Separator />
              <Hours onHoursChange={handleHoursChange} />
            </div>
          </div>
          <Separator />
          <div className="flex flex-row w-full mt-10">
            {/* <div
              className={`flex-1 text-primaryColor/90  ${
                lesson === null ? "hidden" : "block"
              }`}
            >
              <p>Details:</p>
              <p>{lesson} price =</p>
              <p>
                Price: participants ({people}) x lesson hours ({hours}) = €
                {total}
              </p>
            </div> */}
            <div className="flex-1">
              <div className="flex justify-between text-2xl ">
                <p className="text-primaryColor/90 ">Total: </p>
                <p>€{total}</p>
              </div>
              <Button
                className="w-full mt-2"
                type="submit"
                disabled={
                  lesson === null || selectedDate === undefined || loading
                }
              >
                {t("book")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingModal;
