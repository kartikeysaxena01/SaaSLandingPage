import CheckIcon from "../assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get Started Free",
    popular: false,
    features: [
      "Basic task tracking",
      "Habit tracking (up to 5)",
      "Daily streak tracking",
      "Basic calendar view",
      "Notes (limited)",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 5,
    buttonText: "Upgrade to Pro",
    popular: true,
    features: [
      "Unlimited tasks & habits",
      "Advanced streak analytics",
      "Full calendar integration",
      "Smart reminders",
      "Notes with tags",
      "Progress insights dashboard",
    ],
  },
  {
    title: "Elite",
    monthlyPrice: 9,
    buttonText: "Go Elite",
    popular: false,
    features: [
      "Everything in Pro",
      "AI habit suggestions",
      "Weekly performance reports",
      "Goal prediction system",
      "Cloud sync across devices",
      "Priority support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex border border-purple-200 rounded-full px-4 py-1 text-sm text-purple-600">
            Pricing
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Plans That Grow
            <span className="text-purple-600"> With You</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Choose the perfect plan for your productivity journey.
            Start free and upgrade whenever you're ready.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, features }) => (
              <div
                key={title}
                className={`relative w-full sm:w-[340px] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${
                  popular
                    ? "bg-black text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 shadow-md"
                }`}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold">{title}</h3>

              
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={`mb-1 ${
                      popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    /month
                  </span>
                </div>

               
                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={CheckIcon}
                        alt=""
                        className="w-5 h-5 shrink-0"
                      />

                      <span
                        className={
                          popular
                            ? "text-gray-200"
                            : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                
                <button
                  className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all
                  ${
                    popular
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
