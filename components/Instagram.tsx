"use client";
import Image from "next/image";
type instagramProps = {};
import { Instagram as Insta } from "lucide-react";
const Instagram: React.FC<instagramProps> = ({}) => {
  return (
    <div className="w-full grid grid-cols-5 ">
      <div
        className="image-placeholder font-bold aspect-square cursor-pointer relative overflow-hidden group col"
        onClick={() => {}}
      >
        <Image
          src="https://images.unsplash.com/photo-1573051977501-c6beb2cf29d5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gallery image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="bg-primaryColor/40 w-full h-32 absolute  -bottom-32 group-hover:bottom-0 ease-in-out duration-500 flex justify-center items-center text-white text-2xl font-semibold">
          <div className="bg-primaryColor p-4">
            <Insta className="text-secondaryColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
