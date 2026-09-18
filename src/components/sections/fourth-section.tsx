export const FourthSection = () => {
  return (
    <section className="relative bg-[#0e0c0c] text-white">
      <div className="min-h-screen pt-48">
        {/*first row*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:pl-12 lg:pl-16 2xl:pl-24 w-full gap-4 px-6 lg:px-0">
          <div className="flex flex-col justify-center overflow-hidden">
            <span className="text-sm font-semibold uppercase">
              Cloud-Based Control
            </span>
            <h2 className="my-4 text-[clamp(3rem,5vw,7rem)] leading-none font-bold font-roboto">
              ONE <br /> SEAMLESS <br /> ADMIN
            </h2>
            <p className="max-w-lg text-sm">
              From any internet-connected device, access your admin to schedule
              showtimes for sale, customize your website with flexible templates
              and panels, manage customer orders, craft memberships and
              promotions, and track performance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:col-span-2">
            <div className="h-[35vh]  lg:h-[50vh] lg:flex-1 rounded-3xl bg-white/5 shrink-0"></div>
            <div className="h-[35vh]  lg:h-[50vh] lg:flex-1 rounded-3xl bg-white/5 shrink-0"></div>
          </div>
        </div>

        {/*second row*/}
        <div className="mt-36 flex flex-col  lg:flex-row gap-6 md:pr-12 lg:pr-16 2xl:pr-24">
          <div className="flex-2 h-full overflow-hidden relative">
            <div className="absolute inset-0 bg-[#0e0c0c]/70" />
            <video
              src="src\\assets\\videos\\fil-mov.mp4"
              className="object-cover size-fit pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>

          <div className="flex flex-col justify-center flex-1 px-6 lg:px-0">
            <h2 className="font-roboto text-[clamp(4rem,8vw,12rem)] leading-none font-bold">
              IPAD BOX <br /> OFFICE
            </h2>
            <p className="mt-4 mb-8 max-w-sm text-balance">
              Equip your team with a sleek and compact box office station to
              sell tickets and concessions.
            </p>
            <p className="max-w-lg text-balance opacity-50 text-sm">
              Apply member and promotion discounts, process refunds and
              exchanges, print tickets, and email order confirmations. Quickly
              verify online ticket orders with the companion Ticket Scanner App
              available for iOS and Android devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
