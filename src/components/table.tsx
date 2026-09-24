const COLUMN_ONE = [
  "customizable website",
  "ticket sales",
  "easy checkout",
  "showtimes scheduler",
  "film series",
];

const COLUMN_TWO = [
  "calender",
  "ipad box office",
  "sales reports | charts",
  "memberships",
  "campaigns | promotion codes",
];

const COLUMN_THREE = [
  "donations",
  "gift cards",
  "ticket scanner app",
  "festival extensions",
  "responsive support",
];

export const Table = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 uppercase border-t border-white/20 pt-8 md:pt-12 gap-6 text-sm lg:text-base [&>div]:min-w-0 [&_span]:min-h-14">
      <div className="flex flex-col gap-2 md:gap-6">
        {COLUMN_ONE.map((item, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "py-4 border-white/20"
                : "border-t border-white/20 py-4"
            }
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        {COLUMN_TWO.map((item, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "py-4 border-white/20"
                : "border-t border-white/20 py-4"
            }
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        {COLUMN_THREE.map((item, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "py-4 border-white/20"
                : "border-t border-white/20 py-4"
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
