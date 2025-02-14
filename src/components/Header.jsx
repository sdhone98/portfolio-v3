import { Button } from "flowbite-react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [IsDarkModeOn, setIsDarkModeOn] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const toggleMode = () => {
    setIsFading(true); // Start fading effect
    setTimeout(() => {
      setIsDarkModeOn((prev) => !prev); // Toggle dark mode after fade-out
      setIsFading(false); // Reset fading effect after fade-in
    }, 250);
  };

  return (
    <div className="w-full h-16 flex flex-col items-center justify-center pt-4 p-2 bg-white rounded-b-2xl fixed top-0 shadow-sm z-10">
      <span className="w-full flex justify-between items-center px-4">
        <div className="flex justify-between items-center gap-1">
          <h3 className="pl-4 font-dm-semi-bold text-lg cursor-pointer">
            Sagar Dhone
          </h3>
        </div>
        <div>
          <span
            className={`cursor-pointer transition-opacity duration-500 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            onClick={toggleMode}
          >
            {IsDarkModeOn ? <FaSun /> : <BsMoonStarsFill />}
          </span>
          {/*<Button onClick={toggleMode}>*/}
          {/*  */}
          {/*</Button>*/}
        </div>
      </span>
    </div>
  );
};

export default Header;
