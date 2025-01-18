import ExperienceCard from "./ExperienceCard.jsx";

const Experience = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white position-relative -mt-[40px] rounded-t-[32px]">
      <div className="w-full h-28 flex items-center px-96">
        <h2 className="font-[DM] font-bold text-3xl">Experience</h2>
      </div>
      <div>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
