export const ContactSection = () => {
  return (
    <section
      className="min-h-[100svh] lg:min-h-[120svh] section-space text-white relative overflow-hidden flex flex-col page-gutter gap-12 justify-around"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ) no-repeat center/cover",
      }}
    >
      <div>
        <p className="font-bold uppercase font-roboto text-[clamp(1rem,2vw,3rem)] mb-4 leading-none">
          more than a platform
        </p>
        <h2 className="font-bold uppercase font-roboto text-[clamp(3rem,6vw,10rem)] leading-[0.95]">
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
