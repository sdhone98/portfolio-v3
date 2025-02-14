import { Button } from "flowbite-react";
import { FaLaptopCode } from "react-icons/fa";



const Hero = () => {
  return (
    <div className="w-full min-h-[85vh] bg-amber-200 flex flex-col items-center justify-center">
      <div className="w-3/5 flex flex-col items-center justify-center">
          <FaLaptopCode className="text-8xl"/>
        <span className="font-dm-light text-xl text-center pb-2">
          Hello, I'm Sagar. A passionate Software Developer.
        </span>
        <h1 className="font-dm-semi-bold text-7xl text-center pb-12">
          Full Stack Developer, But I lean towards Backend Development.
        </h1>
        <Button pill>Download</Button>
      </div>
    </div>
  );
};

export default Hero;
