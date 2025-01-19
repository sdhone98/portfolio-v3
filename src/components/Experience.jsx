import ExperienceCard from "./ExperienceCard.jsx";
import projectData from "../resources/allData.json";

const Experience = () => {
  const projectDataSet = projectData.projects;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white position-relative -mt-[40px] rounded-t-[32px]">
      <div className="w-full h-28 flex items-center px-96">
        <h2 className="font-[DM] font-bold text-3xl">Experience</h2>
      </div>
      <div className={"flex items-center justify-between flex-wrap px-96"}>
        {/* eslint-disable-next-line react/jsx-key */}
        {projectDataSet.map((obj) => (
          <ExperienceCard projectDetails={obj} />
        ))}
        {/*<ExperienceCard />*/}
      </div>
    </div>
  );
};

export default Experience;
