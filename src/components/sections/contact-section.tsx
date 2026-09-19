export const ContactSection = () => {
  return (
    <section
      className="h-[120vh] text-white relative overflow-hidden flex flex-col max-md:px-6 sm:px-6 lg:px-24 xl:px-32 2xl:px-60 justify-around"
      style={{
        background:
          "url(src/assets/images/theatrebg.webp) no-repeat center/cover",
      }}
    >
      <div>
        <p className="font-bold uppercase font-roboto text-[clamp(1rem,2vw,3rem)] mb-4 leading-none">
          more than a platform
        </p>
        <h2 className="font-bold uppercase font-roboto text-[clamp(4rem,6vw,10rem)] leading-[clamp(3rem,5vw,9rem)]">
          we're your <br /> partner
        </h2>
      </div>
      <div className="">
        <p className="my-8 max-w-md text-balance">
          From the onset, we meet with your team to understand all key roles &
          build a foundation of partnership
        </p>
        <p className="my-8 max-w-md text-balance opacity-75">
          Beyond initial trainings, we are available for screen-share meetings
          whenever helpful. We provide prompt responses and resolutions to all
          inquiries and maintain critical support seven days a week, including
          nights and weekends. Through our shared dialogue and correspondence,
          we frequently discover insights and opportunities to introduce new
          capabilities tailored for independent cinemas.
        </p>
      </div>
    </section>
  );
};
