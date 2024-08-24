type loadingProps = {};
import Loading from "@/public/loading.svg";
import Image from "next/image";

const loading: React.FC<loadingProps> = ({}) => {
  return (
    <div className="fixed h-[100vh] flex justify-center items-center inset-0 bg-white">
      <div>
        <Image src={Loading} alt="Loading" />
      </div>
    </div>
  );
};

export default loading;
