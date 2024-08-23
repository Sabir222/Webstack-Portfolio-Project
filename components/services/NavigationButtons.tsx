"use client";
import { useRouter } from "@/navigation";
import Container from "../Container";

type NavigationButtonsProps = {
  activeButton: "surf" | "kiteSurf" | "wingfoil";
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  activeButton,
}) => {
  const router = useRouter();
  return (
    <div className="my-10">
      <Container>
        <div className="border-b-2 flex gap-2 text-lg font-medium">
          <button
            onClick={() => router.push("/lessons/surf")}
            className={`flex-1 hover:bg-opacity-70 ease-in-out duration-200 py-5 ${
              activeButton === "surf"
                ? "bg-white rounded-t-xl text-primaryColor"
                : "text-white"
            }`}
          >
            SURF
          </button>
          <button
            onClick={() => router.push("/lessons/kitesurf")}
            className={`flex-1  hover:bg-opacity-90 ease-in-out duration-200  ${
              activeButton === "kiteSurf"
                ? "bg-white rounded-t-xl text-primaryColor"
                : "text-white"
            }`}
          >
            KITESURF
          </button>
          <button
            onClick={() => router.push("/lessons/wingfoil")}
            className={`flex-1 hover:bg-opacity-70 ease-in-out duration-200 ${
              activeButton === "wingfoil"
                ? "bg-white rounded-t-xl text-primaryColor"
                : "text-white"
            }`}
          >
            WINGFOIL
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NavigationButtons;
