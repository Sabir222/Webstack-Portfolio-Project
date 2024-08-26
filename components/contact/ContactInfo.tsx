import { Mail, MapPin, PhoneCall } from "lucide-react";
import ContactCard from "./ContactCard";
import Container from "../Container";
import { useTranslations } from "next-intl";

type ContactInfoProps = {};

const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
  const t = useTranslations("ContactInfo");

  return (
    <div className="bg-white">
      <Container>
        <div className=" flex flex-col lg:flex-row gap-10 py-20   ">
          <ContactCard
            title={t("t1")}
            content="+212 6 12 12 12 12"
            icon={<PhoneCall size={70} />}
          />
          <ContactCard
            title={t("t2")}
            content={t("address")}
            icon={<MapPin size={70} />}
          />
          <ContactCard
            title={t("t3")}
            content="YassineIdiot@gmail.com"
            icon={<Mail size={70} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
