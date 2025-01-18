import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import { Button } from "flowbite-react";

const ProjectCard = ({
  currentCardIndex,
  paraText,
  backgroundColor,
  onLeftClick,
  onRightClick,
  isLeftButtonDisabled,
  isRightButtonDisabled,
}) => {
  return (
    <div className="w-3/5 flex items-center justify-between">
      {/* Color Card */}
      <div
        className="w-3/6 h-[30vh] rounded-3xl"
        style={{ backgroundColor: `#${backgroundColor}` }}
      ></div>

      {/* Project Details */}
      <div className="w-2/5 h-[30vh] p-4 box-border">
        <div className="w-full flex flex-col justify-between">
          <h2 className="font-[DM_Bold] pl-2 pt-4 pb-2 text-xl">
            Project Name
          </h2>
          <div className="font-[DM] h-32 pl-2 overflow-hidden text-ellipsis">
            {paraText}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              size="md"
              pill
              className="w-2/6 h-9 flex flex-col items-center justify-center"
            >
              <span className="font-[DM]">GitHub</span>
            </Button>
            <div className="w-2/6 py-2 pl-6 flex items-center justify-between text-2xl">
              <Button
                size="xs"
                pill
                disabled={isLeftButtonDisabled}
                onClick={onLeftClick}
              >
                <FaAngleLeft className="h-5 w-8" />
              </Button>
              <Button
                size="xs"
                pill
                disabled={isRightButtonDisabled}
                onClick={onRightClick}
              >
                <FaChevronRight className="h-5 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
