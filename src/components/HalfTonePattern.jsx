const HalfTonePattern = () => {
  return (
    <div className="w-4/6 h-4/6 bg-notlime-100 rounded-3xl flex flex-col items-center justify-center">
      <div className="w-4/6 h-4/6 overflow-hidden flex items-center absolute z-0 p-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
            backgroundRepeat: "repeat",
            backgroundPosition: "right",
            maskImage: "linear-gradient(to right, black, transparent 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, black, transparent 40%)",
          }}
        ></div>
      </div>

      <div className="w-4/6 h-4/6 overflow-hidden flex items-center absolute z-0 p-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
            backgroundRepeat: "repeat",
            backgroundPosition: "right",
            maskImage: "linear-gradient(to left, black, transparent 40%)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent 40%)",
          }}
        ></div>
      </div>
    </div>
  );
};
export default HalfTonePattern;
