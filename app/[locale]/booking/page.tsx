import BookingModal from "@/components/booking/BookingModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bluboarding.com"),
  title: "Blüboarding | Booking",
  description: "Book your next adventure with Blüboarding",
  alternates: {
    canonical: `/booking`,
    languages: {
      en: "/en/booking",
      fr: "/fr/reserver",
    },
  },
};
type pageProps = {};

const page: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <BookingModal />
    </div>
  );
};

export default page;
