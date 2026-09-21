export const VersatileSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#f9f8f8] text-[#171717] py-12">
      <div className="lg:min-h-[80vh] flex flex-col lg:flex-row gap-12  lg:justify-start">
        <div className="lg:w-[40%] overflow-hidden px-12 lg:px-0 w-full">
          <p className="uppercase font-roboto lg:ml-12 font-bold text-center lg:text-start">
            tools to keep your audience returning
          </p>
        </div>

        <div className="lg:w-[60%] w-full flex flex-col px-6 lg:px-0">
          <p className="uppercase font-roboto font-bold">[ again and again ]</p>
          <div className="mt-auto">
            <p className="font-medium font-roboto text-[clamp(1.5rem,2vw,3rem)] leading-none">
              Audience Engine (01)
            </p>
            <h1 className="uppercase font-bold font-roboto text-[clamp(3rem,9vw,14rem)] leading-none mt-6">
              versatile <br /> memberships
            </h1>
            <p className="lg:max-w-5xl text-balance text-[clamp(1rem,1.5vw,2rem)] leading-none mt-12 font-roboto">
              Attract a vibrant and devoted base of members through monthly and
              annual membership plans that reward their long-term support with
              tailored discounts and premium benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[80vh] flex flex-col-reverse lg:flex-row gap-24 lg:gap-0 mt-32">
        <div className="lg:w-[40%] w-full lg:pt-8 pt-0 ">
          <img
            src="src\\assets\\images\\eve-1.png"
            alt=""
            className="object-cover lg:rounded-md rounded-r-md lg:ml-12 lg:w-[20vw] w-[70%] h-[50vh]"
          />
        </div>
        <div className="lg:w-[60%] w-full self-end lg:self-start pl-8 lg:pl-0">
          <img
            src="src\\assets\\images\\eve-1.png"
            alt=""
            className="object-cover lg:rounded-md rounded-l-md h-[40vh] lg:h-[80vh] w-full"
          />
        </div>
      </div>
    </section>
  );
};
