import Image from "next/image";
import Socials from "../footer/Socials";
import { Facebook, Instagram, Twitter } from "lucide-react";
type TeamCardProps = {
  name: string;
  facebook: string;
  instagram: string;
  twitter: string;
  role: string;
};

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  facebook,
  instagram,
  twitter,
  role,
}) => {
  return (
    <div>
      <div className="flex-1 bg-blue-500 relative h-[500px] group overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1489633908075-1c914e8ee5ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={500}
          width={1000}
          alt="Team member photo"
          className="object-cover h-[500px]  image-placeholder"
        />
        <div className="absolute w-[250px]  h-[200px] bg-primaryColor   right-[-200px]  top-1/2 -translate-y-1/2  text-white transition-all duration-300 ease-in-out group-hover:right-0  ">
          <div className="h-full w-full">
            <div className="flex flex-col justify-center items-center h-full relative w-full">
              <div className=" -rotate-90 leading-none absolute right-[150px] w-[150px] group-hover:text-primaryColor ease-in-out duration-300 font-medium text-md ">
                {name}
              </div>
              <div className="self-end p-3 flex flex-col gap-2">
                <div className="font-semi-bold text-xl">{name}</div>
                <div className="self-end font-light">{role}</div>
                <div className="flex gap-2 self-end">
                  <a href={instagram} target="_blank">
                    <Socials>
                      <Instagram size={15} />
                    </Socials>
                  </a>
                  <a href={twitter} target="_blank">
                    <Socials>
                      <Twitter size={15} />
                    </Socials>
                  </a>
                  <a href={facebook} target="_blank">
                    <Socials>
                      <Facebook size={15} />
                    </Socials>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
