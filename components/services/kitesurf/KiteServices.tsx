import Container from "@/components/Container";
import { Switch } from "@/components/ui/switch";
import ServiceCard from "../ServiceCard";
import ServicesTable from "./Table";
import QandA from "../QandA";
import { useTranslations } from "next-intl";

type kiteServicesProps = {};

const KiteServices: React.FC<kiteServicesProps> = ({}) => {
  const t = useTranslations("KiteLessonsPrivate");
  const t1 = useTranslations("KiteLessonsSemi");
  const t2 = useTranslations("KiteLessonsCol");
  return (
    <div className=" rounded-2xl bg-white mx-2 md:mx-5 pb-10 ">
      <Container>
        <div className="flex flex-col">
          <div className="py-10  flex items-center gap-3 justify-center">
            {/* <p className="text-primaryColor font-semibold text-lg">Classic</p>
            <Switch />
            <p className="text-primaryColor font-semibold text-lg">Event</p> */}
            <p className="text-center  text-primaryColor text-xl lg:w-[70%]">
              {t("title")}
            </p>
          </div>
          <div className="gap-8 pb-10 pt-5  grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3  ">
            <ServiceCard
              imageSrc="/ourservices/kitesurf/prive.jpg"
              title={t("t")}
              price={t("price")}
              description={t("d1")}
              services={[
                {
                  service: t("t0"),
                  details: [
                    t("d01"),
                    t("d02"),
                    t("d03"),
                    t("d04"),
                    t("d05"),
                    t("d06"),
                    t("d07"),
                  ],
                },
                {
                  service: t("t1"),
                  details: [t("d11")],
                },
                {
                  service: t("t2"),
                  details: [t("d21")],
                },
                {
                  service: t("t3"),
                  details: [t("d31")],
                },
                {
                  service: t("t4"),
                  details: [t("d41")],
                },
                {
                  service: t("t5"),
                  details: [t("d51")],
                },
                {
                  service: t("t6"),
                  details: [t("d61")],
                },
              ]}
            />
            <ServiceCard
              imageSrc="/ourservices/kitesurf/semi-prive.jpg"
              title={t1("t")}
              price={t1("price")}
              description={t1("d1")}
              services={[
                {
                  service: t1("t0"),
                  details: [
                    t1("d01"),
                    t1("d02"),
                    t1("d03"),
                    t1("d04"),
                    t1("d05"),
                    t1("d06"),
                    t1("d07"),
                  ],
                },
                {
                  service: t1("t1"),
                  details: [t1("d11")],
                },
                {
                  service: t1("t2"),
                  details: [t1("d21")],
                },
                {
                  service: t1("t3"),
                  details: [t1("d31")],
                },
                {
                  service: t1("t4"),
                  details: [t1("d41")],
                },
                {
                  service: t1("t5"),
                  details: [t1("d51")],
                },
                {
                  service: t1("t6"),
                  details: [t1("d61")],
                },
              ]}
            />
            <ServiceCard
              imageSrc="/ourservices/kitesurf/group.jpg"
              title={t2("t")}
              price={t2("price")}
              description={t2("d1")}
              services={[
                {
                  service: t2("t0"),
                  details: [
                    t2("d01"),
                    t2("d02"),
                    t2("d03"),
                    t2("d04"),
                    t2("d05"),
                    t2("d06"),
                    t2("d07"),
                  ],
                },
                {
                  service: t2("t1"),
                  details: [t2("d11")],
                },
                {
                  service: t2("t2"),
                  details: [t2("d21")],
                },
                {
                  service: t2("t3"),
                  details: [t2("d31")],
                },
                {
                  service: t2("t4"),
                  details: [t2("d41")],
                },
                {
                  service: t2("t5"),
                  details: [t2("d51")],
                },
                {
                  service: t2("t6"),
                  details: [t2("d61")],
                },
              ]}
            />
          </div>
          <div>
            <ServicesTable />
          </div>
        </div>
        <div>
          <QandA />
        </div>
      </Container>
    </div>
  );
};

export default KiteServices;
