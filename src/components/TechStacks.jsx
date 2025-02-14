const TechStack = () => {
    return (
        <div className="relative w-full h-24 overflow-hidden bg-gray-200">
            {/* Scrolling container */}
            <div className="absolute flex w-[400%] animate-scroll">
                {/* First set of divs */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-24 h-24 mx-2 bg-blue-500 flex items-center justify-center text-white font-bold text-lg rounded shadow"
                    >
                        {index + 1}
                    </div>
                ))}
                {/* Duplicate set of divs for seamless looping */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index + 10}
                        className="w-24 h-24 mx-2 bg-blue-500 flex items-center justify-center text-white font-bold text-lg rounded shadow"
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
