import CogImage from "../assets/cog.png";
import { trackEvent } from "./Analytics";
const Hero = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-full tracking-tight bg-white/40 backdrop-blur">
              Version 2.0 is here
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">
              Pathway to <span className="text-[#001E80]">Productivity</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 text-black/60 text-lg tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 items-center">
              <button onClick={()=>trackEvent("Hero Section","Get For Free Clicked")}className="bg-black text-white px-5 py-3 rounded-lg">
                Get for free
              </button>

              <button
                onClick={() => trackEvent("Hero Section", "Learn More Clicked")}
                className="border border-black/20 px-5 py-3 rounded-lg"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={CogImage}
              alt="cog-image"
              className="w-[400px] sm:w-[500px] md:w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
