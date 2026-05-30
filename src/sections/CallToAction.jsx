import Star from "../assets/star.png";
import Spring from "../assets/spring.png";
const CallToAction = () => {
  return (
    <section id="cta" className="py-24">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex border border-purple-200 rounded-full px-4 py-1 text-purple-500">
            Sign up for free
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-black">
            Sign For Free Today
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-semibold tracking-tight">
            From daily tasks to long-term goals, our app helps you stay focused,
            measure progress, and celebrate every milestone along the way.
          </p>
          <button className="mt-20 px-8 py-4 bg-black text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
  Get Started Free
</button>
        </div>
        <div className="relative mt-24 flex justify-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="h-[500px] w-[900px] rounded-full bg-purple-400/20 blur-3xl" />
          </div>
          <div className="absolute left-0 -top-130">
            <img 
            src={Star}
            alt="star"
            className="w-[100px] hidden sm:block md:w-[200px] lg:w-[300px] opacity-80 rotate-[110deg]"
            />
          </div>
          <div className="absolute right-0 md:bottom-10 lg:-bottom-10 overflow-hidden">
            <img 
            src={Spring}
            alt="spring"
            className="w-[100px] hidden sm:block md:w-[200px] lg:w-[300px] opacity-80 md:rotate-[95deg] lg:rotate-[110deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
