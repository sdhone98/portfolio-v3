const ExperienceCard = () => {
  const paraText = `Features from the 'AI overviews and more' Labs experiment may appear on the search results page in the Google app, selected mobile browsers and on Chrome desktop when you turn on this experience.
This experiment includes AI overviews on more Google searches, and may also include other generative AI experiences in Search. Disabling this experiment will not turn off all AI overviews in Search.`;

  return (
    <div className="ExperienceCard">
      <div className="w-80 h-96 bg-blue-300 rounded-3xl flex flex-col items-start p-5">
        <span className="w-full h-1/2 bg-amber-50 rounded-2xl flex flex-col justify-end items-center">
          <div className="w-4/5 h-4/5 border-t-4 border-x-4 rounded-t-2xl border-blue-900 box-border"></div>
        </span>
        <label className="font-[DM_Bold] pl-2 pt-4 pb-2 text-xl">
          Project Name
        </label>
        <div className="font-[DM] w-[250px] h-1/5 pl-2 overflow-hidden text-ellipsis">
          {paraText}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
