export const SmarterSection = () => {
  return (
    <section className="relative overflow-hidden  bg-[#f9f8f8] text-[#171717] pt-56 pb-24  lg:pb-56">
      <div className="lg:pl-44 px-6 lg:px-0 flex flex-col items-center">
        <p className="font-medium font-roboto text-[clamp(1rem,1.5vw,2rem)] leading-none">
          Audience Engine (02)
        </p>
        <h1 className="uppercase font-bold font-roboto text-center lg:text-start text-[clamp(3rem,9vw,14rem)] leading-none mt-6">
          smarter <br /> proportions
        </h1>
        <p className="lg:max-w-5xl text-center lg:text-balance text-[clamp(1rem,1.5vw,2rem)] leading-none mt-12 font-roboto">
          Inspire audiences to return more frequently with compelling discount
          codes delivered through advanced marketing campaigns based on visit
          history and past movie attendance.
        </p>
      </div>

      <div className="lg:min-h-screen  flex flex-col lg:flex-row mt-44 gap-12 lg:gap-0">
        <div className="flex-1 px-4 ">
          <img
            src="src\\assets\\images\\eve-1.png"
            alt=""
            className="object-cover w-full h-[50vh] lg:h-screen rounded-md lg:rounded-r-lg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-24">
          <div className="lg:min-h-[60vh]">
            <div className="size-full flex flex-col items-center justify-center relative px-6 lg:px-0">
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
          <div className="h-full flex gap-2 lg:justify-end lg:items-center">
            <img
              src="src\\assets\\images\\eve-1.png"
              alt=""
              className="object-cover lg:w-[20vw] w-[40vw] h-[20vh] lg:h-[50vh] rounded-md"
            />
            <img
              src="src\\assets\\images\\eve-1.png"
              alt=""
              className="object-cover w-[60vw] lg:w-[20vw] h-[40vh] lg:h-[60vh] rounded-md lg:rounded-l-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
