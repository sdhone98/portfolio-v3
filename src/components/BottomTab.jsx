import { IoMdHeart } from "react-icons/io";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const BottomTab = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center pb-8 px-16 pt-2 gap-2">
      {/*<div className="flex justify-center items-center text-2xl gap-2">*/}
      {/*</div>*/}
      <div className="flex justify-center items-center">
        <FaGithub />
        <FaLinkedin />
        <FaXTwitter />
        <IoMdHeart />
        <span className="font-dm">Made with Love.</span>
      </div>
    </div>
  );
};

export default BottomTab;
