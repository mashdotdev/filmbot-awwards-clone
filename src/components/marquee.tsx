const INTEGRATOINS = [
  "fandango",
  "comscore",
  "the movie db",
  "stripe",
  "webedia/.",
];

export const Marquee = () => {
  return (
    <div className="relative mt-4">
      <div className="flex justify-center gap-4 overflow-hidden h-[10vw]">
        {INTEGRATOINS.map((integration, index) => (
          <div
            key={index}
            className="px-4 bg-white/3 flex items-center justify-center h-[5vw] w-[11vw] uppercase"
          >
            {integration}
          </div>
        ))}
      </div>
    </div>
  );
};
