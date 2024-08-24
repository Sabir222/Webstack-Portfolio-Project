import Container from "@/components/Container";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
type pageProps = {};

const Page: React.FC<pageProps> = ({}) => {
  const t = useTranslations("Thanks");
  return (
    <div className="min-h-[100vh] bg-primaryColor/90 flex items-center ">
      <Container>
        <div className="flex flex-col gap-10  mt-[150px] lg:mt-0">
          <p className="text-7xl text-secondaryColor font-semibold ">
            {t("t1")}
          </p>
          <p className="text-white text-2xl font-semibold">{t("t2")}</p>
          <p className="text-white text-2xl font-semibold">{t("t3")}</p>
          <p className="text-white text-2xl font-semibold  ">
            {t("t4")}
            <span className="flex gap-4 items-center mx-auto text-secondaryColor">
              <Mail />
              yassine@email.com
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Page;
