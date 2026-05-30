import acmeLogo from "../assets/logo-acme.png";
import quantum from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";

const LogoTicker = () => {
  return (
    <div className="px-5">
      <div className="container">
        <section className="py-16">
          <p className="text-center text-black/50 text-sm font-medium tracking-[0.2em] uppercase">
            Trusted by the world’s most innovative teams
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
            <img
              src={acmeLogo}
              alt="acmeLogo"
              className="h-5 md:h-6 lg:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />

            <img
              src={quantum}
              alt="quantum"
              className="h-5 md:h-6 lg:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />

            <img
              src={echoLogo}
              alt="echoLogo"
              className="h-5 md:h-6 lg:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />

            <img
              src={celestialLogo}
              alt="celestialLogo"
              className="h-5 md:h-6 lg:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />

            <img
              src={pulseLogo}
              alt="pulseLogo"
              className="h-5 md:h-6 lg:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoTicker;
