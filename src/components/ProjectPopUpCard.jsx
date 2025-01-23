import { Badge } from "flowbite-react";
import { useEffect, useRef } from "react";

const ProjectPopUpCard = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  projectDetails,
}) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false); // Close the popup
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const techStackList = projectDetails.techStack;
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-2xl shadow-lg p-6 w-[35vw] h-fit"
          >
            <div className="flex items-center justify-start gap-1">
              <span className="font-[DMLight] text-sm">
                {projectDetails.duration}
              </span>
              |
              <span className="font-[DMLight] text-sm">
                {projectDetails.designation}
              </span>
            </div>
            <h2 className="font-dm text-2xl font-semibold mb-2">
              {projectDetails.name}
            </h2>
            <div className="font-[DM] flex flex-wrap gap-1 pb-2">
              {/* eslint-disable-next-line react/jsx-key,react/prop-types */}
              {techStackList.map((_lang) => (
                // eslint-disable-next-line react/jsx-key
                <span className="font-dm-light text-sm bg-violet-200 px-2 rounded-md">
                  {_lang}
                </span>
              ))}
            </div>
            <div className="font-[DM] text-gray-700 mb-4">
              {projectDetails.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPopUpCard;
