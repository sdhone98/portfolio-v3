import { Button } from "flowbite-react";
import { LuMailCheck } from "react-icons/lu";
import HalfTonePattern from "./HalfTonePattern.jsx";

const Contact = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center relative">
      <div className="w-3/5 h-4/6 rounded-3xl flex flex-col items-center justify-center bg-amber-200 px-96">
        {/*<HalfTonePattern/>*/}

        <div className="w-full h-full flex flex-col items-center justify-end p-6">
          <div className="flex justify-center items-center self-center relative h-[120px]">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-0"
            >
              <path
                d="M1.2191 19.893C-3.91124 8.081 8.07778 -3.91124 19.893 1.2191L21.8467 2.06879C25.4546 3.63622 29.5486 3.63622 33.1533 2.06879L35.107 1.2191C46.919 -3.91124 58.9112 8.07779 53.7809 19.893L52.9312 21.8467C51.3638 25.4546 51.3638 29.5486 52.9312 33.1534L53.7809 35.107C58.9112 46.919 46.9222 58.9112 35.107 53.7809L33.1533 52.9312C29.5454 51.3638 25.4514 51.3638 21.8467 52.9312L19.893 53.7809C8.081 58.9112 -3.91124 46.9222 1.2191 35.107L2.06879 33.1534C3.63621 29.5454 3.63621 25.4514 2.06879 21.8467L1.2191 19.893Z"
                fill="#BEDBB0"
              ></path>
              <path
                d="M1.2191 19.893C-3.91124 8.081 8.07778 -3.91124 19.893 1.2191L21.8467 2.06879C25.4546 3.63622 29.5486 3.63622 33.1533 2.06879L35.107 1.2191C46.919 -3.91124 58.9112 8.07779 53.7809 19.893L52.9312 21.8467C51.3638 25.4546 51.3638 29.5486 52.9312 33.1534L53.7809 35.107C58.9112 46.919 46.9222 58.9112 35.107 53.7809L33.1533 52.9312C29.5454 51.3638 25.4514 51.3638 21.8467 52.9312L19.893 53.7809C8.081 58.9112 -3.91124 46.9222 1.2191 35.107L2.06879 33.1534C3.63621 29.5454 3.63621 25.4514 2.06879 21.8467L1.2191 19.893Z"
                fill="#ecfccb"
              ></path>
            </svg>
            <LuMailCheck size="25" className="absolute z-10" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-[DM] text-2xl">Lets Connect</h3>
            <span className="font-[DM] text-md pt-2 pb-4">
              Learn when new experiments launch
            </span>
            <Button pill className="w-32">
              <span className="font-[DM]">Connect</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
