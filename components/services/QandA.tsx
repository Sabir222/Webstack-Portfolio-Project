import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

type QandAProps = {};

const QandA: React.FC<QandAProps> = ({}) => {
  const t = useTranslations("QandA");

  return (
    <div className="flex flex-col">
      <h1 className="mb-20 text-5xl text-primaryColor font-semibold text-center">
        {t("title")}
      </h1>
      <Accordion type="single" collapsible className="mb-10 ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="">{t("q1")}</AccordionTrigger>
          <AccordionContent>{t("r1")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>{t("q2")}</AccordionTrigger>
          <AccordionContent>{t("r2")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>{t("q3")}</AccordionTrigger>
          <AccordionContent>{t("r3")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>{t("q4")}</AccordionTrigger>
          <AccordionContent>{t("r4")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>{t("q5")}</AccordionTrigger>
          <AccordionContent>{t("r5")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>{t("q6")}</AccordionTrigger>
          <AccordionContent>{t("r6")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-">
          <AccordionTrigger>{t("q7")}</AccordionTrigger>
          <AccordionContent>{t("r7")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>{t("q8")}</AccordionTrigger>
          <AccordionContent>{t("r8")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>{t("q9")}</AccordionTrigger>
          <AccordionContent>{t("r9")}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QandA;
