export const SmarterSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f9f8f8] text-[#171717] py-[var(--editorial-space)]">
      <div className="content-container flex flex-col items-center lg:block">
        <p className="font-medium font-roboto text-[clamp(1rem,1.5vw,2rem)] leading-none">
          Audience Engine (02)
        </p>
        <h1 className="uppercase font-bold font-roboto text-center lg:text-start text-[clamp(2.5rem,9vw,14rem)] leading-none mt-6">
          smarter <br /> proportions
        </h1>
        <p className="max-w-[55ch] text-center lg:text-start lg:text-balance text-[clamp(1rem,1.5vw,2rem)] leading-snug mt-8 lg:mt-12 font-roboto">
          Inspire audiences to return more frequently with compelling discount
          codes delivered through advanced marketing campaigns based on visit
          history and past movie attendance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-[var(--editorial-space)] gap-12 lg:gap-0">
        <div className="flex-1 min-w-0 page-gutter lg:px-0">
          <img
            src="https://images.pexels.com/photos/2124698/pexels-photo-2124698.jpeg"
            alt=""
            className="object-cover w-full aspect-[4/3] lg:aspect-auto lg:h-[100svh] rounded-md lg:rounded-r-lg"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-12 lg:gap-24">
          <div className="lg:min-h-[60svh] flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center relative page-gutter">
              <h4 className="font-roboto font-medium text-[clamp(3rem,8vw,12rem)] leading-none">
                75%
              </h4>
              <p className="text-center font-roboto font-medium uppercase text-[clamp(1rem,1.5vw,2rem)] leading-none">
                increase in ticketing <br /> and f&b sales
              </p>
              <p className="text-center max-w-lg mt-8">
                when engaging “lapsed” customers who had not returned to the
                theater in the past year with a promotion campaign powered by
                Filmbot
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-start lg:justify-end lg:items-center">
            <img
              src="https://images.pexels.com/photos/2394591/pexels-photo-2394591.jpeg"
              alt=""
              className="object-cover min-w-0 w-[calc(40%-0.25rem)] lg:w-[40%] aspect-[4/5] lg:h-[50svh] rounded-md"
            />
            <img
              src="https://images.pexels.com/photos/31992862/pexels-photo-31992862.jpeg"
              alt=""
              className="object-cover min-w-0 w-[calc(60%-0.25rem)] lg:w-[40%] aspect-[3/4] lg:h-[60svh] rounded-md lg:rounded-l-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
