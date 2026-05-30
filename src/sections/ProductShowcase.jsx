import Product from "../assets/Product.png";
import pyramidImage from "../assets/pyramid.png";
import noodle from "../assets/noodle.png";
const ProductShowcase = () => {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex border border-purple-200 rounded-full px-4 py-1 text-sm text-purple-600">
            Boost Your Productivity
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            A More Effective Way to{" "}
            <span className="text-purple-600">Track Progress</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS application in minutes.
          </p>
        </div>

        {/* Product Section */}
        <div className="relative mt-24 flex justify-center">
          {/* Glow Effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="h-[500px] w-[900px] rounded-full bg-purple-400/20 blur-3xl" />
          </div>

          {/* Left Pyramid */}
          <div className="absolute -left-12 top-24 hidden lg:block z-20">
            <img
              src={pyramidImage}
              alt="Pyramid"
              className="w-[220px] hidden sm:block md:block opacity-90 rotate-[-15deg]"
            />
          </div>
          <div className="absolute right-0 bottom-0 sm:-right-10 z-20 sm:-bottom-20">
            <img
              src={noodle}
              alt="noodle"
              className="w-[100px] hidden sm:block md:w-[180px] lg:w-[220px]  h-auto opacity-90 rotate-[-15deg] sm:rotate-[35deg]"
            />
          </div>
          {/* Product Image */}
          <img
            src={Product}
            alt="Product"
            className="relative z-10 w-full max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
