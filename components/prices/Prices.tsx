import Container from "../Container";
import Title from "../Title";
import PriceCard from "./PriceCard";
import { useTranslations } from "next-intl";

type PricesProps = {};

const Prices: React.FC<PricesProps> = ({}) => {
  const t = useTranslations("Plans");

  return (
    <Container>
      <h1 className="py-20 text-center text-7xl text-primaryColor font-semibold">
        {/* {t("title")} */}
        <div className="flex justify-center items-center lg:w-[60%] mx-auto  text-center lg:text-start">
          <Title h1={t("heading")} h2={t("subheading")} h3={t("description")} />
        </div>
      </h1>
      <div className="flex flex-col lg:flex-row   gap-10 py-10  ">
        <PriceCard
          variant="primary"
          price={699}
          title="Ocean Adventure Escape"
          services={[t("s1"), t("s2"), t("s3"), t("s4"), t("s5")]}
          book="Book"
        />
        <PriceCard
          variant="secondary"
          price={1399}
          title="Tidal Thrill Voyage"
          services={[t("s7"), t("s8"), t("s9"), t("s10"), t("s11")]}
          book="Book"
        />
        <PriceCard
          variant="primary"
          price={1099}
          title="Wave Whisperer Repeat"
          services={[
            t("s13"),
            t("s14"),
            t("s15"),
            t("s16"),
            t("s17"),
            t("s18"),
          ]}
          book="Book"
        />
      </div>
    </Container>
  );
};

export default Prices;
