export const ReviewSection = () => {
  return (
    <section className="relative bg-[#0e0c0c] text-white section-space">
      {/* Keep mobile rows in flow; desktop retains the scattered composition. */}
      <div className="flex flex-col gap-4 lg:block lg:h-[max(65vw,120svh)] relative overflow-hidden">
        <div className="self-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 flex gap-4 justify-center">
          <img
            src="https://images.unsplash.com/photo-1789664027098-7cf9cbbc068d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="object-cover h-[40vw] w-[30vw] lg:h-[15vw] lg:w-[15vw] rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1725852701534-ded27e8595ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="object-cover h-[70vw] w-[60vw] lg:h-[22vw] lg:w-[30vw] rounded-md"
          />
        </div>

        <img
          src="https://images.unsplash.com/photo-1789742203815-e98da1562329?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover h-[70vw] w-[50vw] lg:h-[30vw] lg:w-[30vw] rounded-md lg:absolute lg:left-0 lg:top-2/3 lg:-translate-y-2/3"
        />

        <img
          src="https://images.unsplash.com/photo-1789628005729-c3e85a840d5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover self-center lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-[60vw] h-[50vw] lg:h-[20vw] lg:w-[20vw] rounded-md"
        />

        <img
          src="https://images.unsplash.com/photo-1755417146741-8aafab9ec528?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover absolute right-0 top-1/3 -translate-y-1/3 transform w-[20vw] h-[25vw] rounded-md hidden lg:block"
        />

        <img
          src="https://images.unsplash.com/photo-1784034291864-65d57ee949e6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover absolute right-[10%] bottom-[2%] transform w-[15vw] h-[20vw] rounded-md hidden lg:block"
        />
      </div>

      {/*review section*/}
      <div className="lg:min-h-[80svh] flex flex-col items-center justify-center content-container section-space text-center">
        <p className="text-center font-roboto font-semibold text-[clamp(2rem,6vw,5rem)] max-w-7xl leading-none uppercase">
          "filmbot has been instrumental in the growth of the davis theatre with
          flexible tools and innovative features"
        </p>

        <p className="mt-8">RANDOM PERSON, FROM SOMEWHERE</p>
        <p>SOME THEATRE</p>
      </div>

      {/*images section*/}
      <div className="lg:h-[100svh] relative overflow-hidden flex page-gutter lg:px-0">
        <div className="flex-3 min-w-0 lg:h-full flex items-center overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1789217657182-57e7ca9d5e31?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full aspect-[4/3] lg:aspect-auto lg:h-[50vw] object-cover rounded-md"
          />
        </div>
        <div className="flex-2 h-full lg:flex hidden items-center justify-end">
          <img
            src="https://images.unsplash.com/photo-1789053253774-6c661c549f96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[20vw] h-[30vw] object-cover rounded-md"
          />
        </div>
        <div className="flex-1 h-full lg:flex items-end justify-end hidden">
          <img
            src="https://images.unsplash.com/photo-1788788042345-f2ea5fa7dfb4?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[15vw] h-[20vw] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
