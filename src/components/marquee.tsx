const INTEGRATOINS = [
  "fandango",
  "comscore",
  "the movie db",
  "stripe",
  "webedia/.",
  "fandango",
  "comscore",
];

export const Marquee = () => {
  return (
    <div className="relative mt-4">
      <div className="flex flex-wrap justify-center gap-4 pb-[var(--section-space)]">
        {INTEGRATOINS.map((integration, index) => (
          <div
            key={index}
            className="px-4 bg-white/3 flex text-xs items-center justify-center min-h-16 w-32 lg:w-[11vw] lg:max-w-64 uppercase shrink-0"
          >
            {integration}
          </div>
        ))}
      </div>
    </div>
  );
};
