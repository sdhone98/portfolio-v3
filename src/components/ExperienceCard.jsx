import { Button } from "flowbite-react";

const ExperienceCard = ({ projectDetails }) => {
  const techStackList = projectDetails.techStack;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="ExperienceCard">
      <div className="w-80 h-96 border border-black rounded-2xl flex flex-col items-start p-5">
        <span className="w-full h-1/2 bg-amber-100 rounded-2xl flex flex-col justify-end items-center">
          <div className="w-4/5 h-4/5 border-t-4 border-x-4 rounded-t-2xl border-blue-900 box-border"></div>
        </span>
        <div className="w-full h-1/2 flex flex-col pl-1 relative cursor-default">
          <label className="font-dm-light text-sm pt-4">
            {projectDetails.date}
          </label>
          <h2 className="font-dm-bold text-xl">{projectDetails.name}</h2>
          {/*<div className="font-[DM] w-[250px] h-1/5 overflow-hidden text-ellipsis">*/}
          {/*    {projectDetails.url}*/}
          {/*</div>*/}
          <div className="flex flex-wrap gap-1 pt-2">
            {/* eslint-disable-next-line react/jsx-key,react/prop-types */}
            {techStackList.map((_lang) => (
              // eslint-disable-next-line react/jsx-key
              <span className="font-dm-light text-sm bg-violet-200 px-2 rounded-md">
                {_lang}
              </span>
            ))}
          </div>
          <div className="w-1/2 absolute bottom-0 left-0 flex flex-wrap gap-1 pt-2 justify-between items-center">
            <Button
              pill
              size="sm"
              onClick={() => openInNewTab(projectDetails.url)}
            >
              GitHub
            </Button>
            {projectDetails["hostUrl"] && (
              <Button
                pill
                size="sm"
                onClick={() => openInNewTab(projectDetails.hostUrl)}
              >
                Visit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
