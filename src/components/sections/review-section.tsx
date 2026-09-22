export const ReviewSection = () => {
  return (
    <section className="relative bg-[#0e0c0c] text-white py-16 pb-24 lg:pb-44">
      {/*scatterd images div*/}
      <div className="h-[120vh] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform flex gap-4 justify-center">
          <img
            src="src\\assets\\images\\eve-1.png"
            alt="image"
            className="object-cover h-[40vw] w-[30vw] lg:h-[15vw] lg:w-[15vw] rounded-md"
          />
          <img
            src="src\\assets\\images\\eve-1.png"
            alt="image"
            className="object-cover h-[70vw] w-[60vw] lg:h-[22vw] lg:w-[30vw] rounded-md"
          />
        </div>

        <img
          src="src\\assets\\images\\eve-1.png"
          alt=""
          className="object-cover h-[70vw] w-[50vw] lg:h-[30vw] lg:w-[30vw] rounded-md absolute left-0 lg:top-2/3 lg:-translate-y-2/3 top-[40%]"
        />

        <img
          src="src\\assets\\images\\eve-1.png"
          alt=""
          className="object-cover absolute bottom-0 left-1/2 -translate-x-1/2 transform w-[60vw] h-[50vw] sm:h-[70vw] lg:h-[20vw] lg:w-[20vw] rounded-md"
        />

        <img
          src="src\\assets\\images\\eve-1.png"
          alt=""
          className="object-cover absolute right-0 top-1/3 -translate-y-1/3 transform w-[20vw] h-[25vw] rounded-md hidden lg:block"
        />

        <img
          src="src\\assets\\images\\eve-1.png"
          alt=""
          className="object-cover absolute right-[10%] bottom-[2%] transform w-[15vw] h-[20vw] rounded-md hidden lg:block"
        />
      </div>

      {/*review section*/}
      <div className="lg:min-h-[80vh] flex flex-col items-center justify-center px-6 pt-12 ">
        <p className="text-center font-roboto font-semibold text-[clamp(2rem,6vw,5rem)] max-w-7xl leading-none uppercase">
          "filmbot has been instrumental in the growth of the davis theatre with
          flexible tools and innovative features"
        </p>

        <p className="mt-8">RANDOM PERSON, FROM SOMEWHERE</p>
        <p>SOME THEATRE</p>
      </div>

      {/*images section*/}
      <div className="lg:h-screen relative overflow-hidden flex px-6 lg:px-0">
        <div className="flex-3 mt-24 lg:mt-0 h-full flex items-center overflow-hidden relative">
          <img
            src="src\\assets\\images\\bug.png"
            alt=""
            className="w-full h-full lg:h-[50vw] object-cover rounded-md"
          />
        </div>
        <div className="flex-2 h-full lg:flex hidden items-center justify-end">
          <img
            src="src\\assets\\images\\bug.png"
            alt=""
            className="w-[20vw] h-[30vw] object-cover rounded-md"
          />
        </div>
        <div className="flex-1 h-full lg:flex items-end justify-end hidden">
          <img
            src="src\\assets\\images\\bug.png"
            alt=""
            className="w-[15vw] h-[20vw] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
