type PageHeaderProps = {
  title: string;
  description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="h-[70vh] md:h-[50vh] w-full  flex items-center">
      <div className="w-full h-full bg-gradient-to-tr from-primaryColor from-60% to-[#6DD5FA] z-10 ">
        <div className="text-white max-w-[1200px] gap-4 mx-auto px-[32px]  flex flex-col justify-center  h-full w-full ">
          <div className="font-light text-xl flex gap-2 items-center italic">
            <hr className="w-10" /> {title}
          </div>
          <div className="font-medium text-2xl">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
