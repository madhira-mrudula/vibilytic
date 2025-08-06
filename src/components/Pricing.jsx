import { pricingPlans } from "./Data";
import { useEffect } from "react";
import AOS from "aos";
export function Pricing() {
 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-20 px-4 bg-gray-100  transition-colors duration-500"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 ">
          Pricing Plans for Every Influencer
        </h2>
        <p className="text-gray-500  mb-12 max-w-2xl mx-auto">
          Choose from flexible plans that match your content goals, engagement model, or growth strategy.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-white/10 shadow-xl border transition-all duration-300 p-8 hover:scale-105 ${
                plan.popular ? "border-yellow-400 ring-2 ring-yellow-300" : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="text-sm bg-yellow-400 text-black rounded-full px-4 py-1 font-semibold inline-block mb-4 animate-pulse">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 ">{plan.title}</h3>
              <p className="text-3xl font-bold my-4 text-purple-600 dark:text-purple-400">{plan.price}</p>
              <p className="text-gray-600  mb-6">{plan.description}</p>

              <ul className="text-left text-sm space-y-3 mb-6 text-gray-800 ">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={feature.included ? "text-green-500" : "text-red-500"}>
                      {feature.included ? "✓" : "✕"}
                    </span>
                    <span className={feature.included ? "" : "line-through opacity-60"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="bg-purple-600 hover:bg-purple-700 text-white  w-full py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

