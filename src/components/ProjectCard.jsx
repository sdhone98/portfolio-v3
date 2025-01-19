import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import { Button } from "flowbite-react";
import ProjectPopUpCard from "./ProjectPopUpCard.jsx";
import { useState } from "react";

const ProjectCard = ({
  projectDetails,
  currentCardIndex,
  backgroundColor,
  onLeftClick,
  onRightClick,
  isLeftButtonDisabled,
  isRightButtonDisabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
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
          <div className="flex items-center justify-start gap-1">
            <span className="font-[DMLight] pl-2 text-sm">
              {projectDetails.duration}
            </span>
            |
            <span className="font-[DMLight] text-sm">
              {projectDetails.designation}
            </span>
          </div>
          <h2 className="font-[DM] pl-2 pb-2 text-xl font-bold">
            {/* eslint-disable-next-line react/prop-types */}
            {projectDetails.name}
          </h2>
          <div
            className="font-[DM] h-30 pl-2 overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              lineHeight: "1.5em",
              maxHeight: "8em",
            }}
          >
            {projectDetails.description}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              size="md"
              pill
              className="w-2/6 h-9 flex flex-col items-center justify-center"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <span className="font-[DM]">Read more</span>
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
          {
            <ProjectPopUpCard
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              projectDetails={projectDetails}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
