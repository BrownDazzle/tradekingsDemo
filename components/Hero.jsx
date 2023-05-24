
import GetStarted from "@components/GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6 px-5`}>
      <div className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 pt-20 pr-26 w-full h-full`}>
        <div className="flex justify-center items-center w-full">
          <h1 className="flex justify-center text-4xl lg:text-6xl md:text-4xl sm:text-4xl font-extrabold text-gray-600">
            Number One <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <h1 className="flex justify-center text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-slate-600 mb-4">
          <span className="text-gradient"> {""}Trusted</span>&nbsp; Brand.
        </h1>
        <p className={`lg:text-2xl md:text-2xl sm:text-1xl font-bold text-slate-500 filter drop-shadow-lg mt-2  pl-10`}>
          Trade Kings is a leading manufacturing company in Zambia that produces a wide range of consumer goods.
        </p>
      </div>

      <div className={`flex-1 flex flex justify-center items-center md:my-0 my-2 relative`}>
        <img src="/assets/tk-images/antiseptic.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
