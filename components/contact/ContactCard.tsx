import { ReactNode } from "react";

type ContactCardProps = {
  title: string;
  icon: ReactNode;
  content: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ title, icon, content }) => {
  return (
    <div className="h-[300px] bg-primaryBackground p-8 flex items-center justify-center flex-col gap-6 text-primaryColor flex-1">
      <div>{icon}</div>
      <div className="font-semibold text-2xl">{title}</div>
      <div className="font-light opacity-80">{content}</div>
    </div>
  );
};

export default ContactCard;
