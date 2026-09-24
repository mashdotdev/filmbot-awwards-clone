export const VersatileSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#f9f8f8] text-[#171717] py-12">
      <div className="lg:min-h-[80svh] flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-start">
        <div className="lg:w-[40%] page-gutter w-full">
          <p className="uppercase font-roboto font-bold text-center lg:text-start">
            tools to keep your audience returning
          </p>
        </div>

        <div className="lg:w-[60%] min-w-0 w-full flex flex-col page-gutter lg:pl-0 gap-12">
          <p className="uppercase font-roboto font-bold">[ again and again ]</p>
          <div className="mt-auto">
            <p className="font-medium font-roboto text-[clamp(1rem,1.5vw,2rem)] leading-none">
              Audience Engine (01)
            </p>
            <h1 className="uppercase font-bold font-roboto text-[clamp(2.5rem,8vw,12rem)] leading-none mt-6">
              versatile <br /> memberships
            </h1>
            <p className="max-w-[55ch] text-balance text-[clamp(1rem,1.5vw,2rem)] leading-snug mt-8 lg:mt-12 font-roboto">
              Attract a vibrant and devoted base of members through monthly and
              annual membership plans that reward their long-term support with
              tailored discounts and premium benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 mt-[var(--section-space)]">
        <div className="lg:w-[40%] w-full lg:pt-8 pt-0 ">
          <img
            src="https://images.unsplash.com/photo-1788497503432-b53df1c60e64?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover lg:rounded-md rounded-r-md lg:ml-[var(--page-gutter)] lg:w-[20vw] w-[70%] aspect-[3/4] max-h-[50rem]"
          />
        </div>
        <div className="lg:w-[60%] w-full self-end lg:self-start pl-[var(--page-gutter)] lg:pl-0">
          <img
            src="https://images.pexels.com/photos/6195562/pexels-photo-6195562.jpeg"
            alt=""
            className="object-cover lg:rounded-md rounded-l-md aspect-[4/3] lg:aspect-auto lg:h-[80svh] w-full"
          />
        </div>
      </div>
    </section>
  );
};
