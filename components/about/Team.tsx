import Container from "@/components/Container";
import Title from "../Title";
import TeamCard from "./TeamCard";
import { useTranslations } from "next-intl";

type TeamProps = {};

const Team: React.FC<TeamProps> = ({}) => {
  const t = useTranslations("Team");
  return (
    <section className=" w-full py-20 flex flex-col justify-center items-center">
      <Container>
        <div className="flex justify-center items-center lg:w-[60%] mx-auto mb-20 text-center lg:text-start">
          <Title h1={t("h1")} h2={t("h2")} h3={t("h3")} />
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between w-full gap-11 ">
        <TeamCard
          facebook=""
          instagram=""
          name="Yassine El youssefi"
          role="Kite Coach"
          twitter=""
        />
        <TeamCard
          facebook=""
          instagram=""
          name="Yassine El youssefi"
          role="Kite Coach"
          twitter=""
        />
        <TeamCard
          facebook=""
          instagram=""
          name="Yassine El youssefi"
          role="Kite Coach"
          twitter=""
        />
        <TeamCard
          facebook=""
          instagram=""
          name="Yassine El youssefi"
          role="Kite Coach"
          twitter=""
        />
      </div>
    </section>
  );
};

export default Team;
