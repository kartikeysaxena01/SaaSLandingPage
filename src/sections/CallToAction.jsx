import Star from "../assets/star.png";
import Spring from "../assets/spring.png";

const CallToAction = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden bg-white">

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="h-[400px] w-[600px] md:h-[500px] md:w-[900px] rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex border border-purple-200 rounded-full px-4 py-1 text-purple-600 text-sm">
          Sign up for free
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
          Sign For Free Today
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          From daily tasks to long-term goals, our app helps you stay focused,
          measure progress, and celebrate every milestone along the way.
        </p>

        {/* Button */}
        <button className="mt-10 px-8 py-4 bg-black text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
          Get Started Free
        </button>

      </div>

      {/* Decorative Images */}
      <img
        src={Star}
        alt="star"
        className="hidden sm:block absolute left-0 top-10 w-24 md:w-40 lg:w-56 opacity-80 rotate-12"
      />

      <img
        src={Spring}
        alt="spring"
        className="hidden sm:block absolute right-0 bottom-10 w-24 md:w-40 lg:w-56 opacity-80 rotate-12"
      />

    </section>
  );
};

export default CallToAction;