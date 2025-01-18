import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  const dataSet = [
    "FF8A8A",
    "727D73",
    "C8AAAA",
    "AAB99A",
    "7C444F",
    "8174A0",
    "C6E7FF",
    "CDC1FF",
    "FFB26F",
  ];
  const paraText = `Features from the 'AI overviews and more' Labs experiment may appear on the search results page in the Google app, selected mobile browsers and on Chrome desktop when you turn on this experience.
This experiment includes AI overviews on more Google searches, and may also include other generative AI experiences in Search. Disabling this experiment will not turn off all AI overviews in Search.`;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isLeftButtonOn, setIsLeftButtonOn] = useState(false);
  const [isRightButtonOn, setIsRightButtonOn] = useState(false);

  const rightClick = () => {
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, dataSet.length - 1),
    );
  };

  const leftClick = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    setIsLeftButtonOn(currentCardIndex === 0);
    setIsRightButtonOn(currentCardIndex === dataSet.length - 1);
  }, [currentCardIndex]);

  return (
    <div className="w-full bg-lime-100 flex flex-col items-center justify-center">
      <div className="w-full h-28 flex items-center px-96">
        <h2 className="font-[DM] font-bold text-3xl">Projects</h2>
      </div>
      <ProjectCard
        currentCardIndex={currentCardIndex}
        paraText={paraText}
        backgroundColor={dataSet[currentCardIndex]}
        onLeftClick={leftClick}
        onRightClick={rightClick}
        isLeftButtonDisabled={isLeftButtonOn}
        isRightButtonDisabled={isRightButtonOn}
      />
    </div>
  );
};
export default Projects;
