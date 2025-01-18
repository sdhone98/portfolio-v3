import { Button } from "flowbite-react";
import { LuMailCheck } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center relative">
      <div className="w-4/6 h-4/6 bg-lime-100 rounded-3xl flex flex-col items-center justify-center">
        <div className="w-4/6 h-4/6 overflow-hidden flex items-center absolute z-0 p-3">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
              backgroundSize: "15px 15px",
              backgroundRepeat: "repeat",
              backgroundPosition: "right",
              maskImage: "linear-gradient(to left, black, transparent)",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
            }}
          ></div>
        </div>
        <LuMailCheck size="25" />

        <h3 className="font-[DM] text-2xl">Let's Connect</h3>
        <span className="font-[DM] text-md pt-2 pb-4">
          Learn when new experiments launch
        </span>
        <Button pill className="w-32">
          <span className="font-[DM]">Connect</span>
        </Button>
      </div>
    </div>
  );
};
export default Contact;
