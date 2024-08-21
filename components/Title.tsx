type TitleProps = {
  h1: string;
  h2: string;
  h3: string;
};

const Title: React.FC<TitleProps> = ({ h1, h2, h3 }) => {
  return (
    <div className="flex-col ">
      <div className="text-primaryColor font-light text-lg">
        <div className="flex items-center gap-5 justify-center lg:justify-start">
          <hr className="border-sm border-primaryColor  w-12 " />
          {h1}
        </div>
      </div>
      <h1 className="text-primaryColor font-semibold md:text-5xl mt-3 mb-5 text-4xl  ">
        {h2}
      </h1>
      <h2 className="text-primaryColor text-xl  md:text-2xl  font-light">
        {h3}
      </h2>
    </div>
  );
};

export default Title;
