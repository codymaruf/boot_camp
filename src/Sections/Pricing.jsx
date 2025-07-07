const plans = [
  {
    name: "Basic (3 Months)",
    price: "৳2000",
    monthlyPrice: "৳700",
    features: ["Gym Access", "Cardio Zone", "Locker"],
    highlight: false,
  },
  {
    name: "Standard (6 Months)",
    price: "৳3000",
    monthlyPrice: "৳700",
    features: ["All Basic Features", "Group Classes", "Personal Coaching"],
    highlight: true,
  },
  {
    name: "Premium (1 Year)",
    price: "৳4000",
    monthlyPrice: "৳7000",
    features: ["All Standard Features", "Priority Support", "Free Merch"],
    highlight: false,
  },
  {
    name: "Lifetime",
    price: "৳5000",
    monthlyPrice: "৳700",
    features: ["All Standard Features", "Priority Support", "Free Merch"],
    highlight: false,
  },
  {
    name: "Personal Training",
    price: "৳5000",
    monthlyPrice: "one-time",
    features: ["All Standard Features", "Priority Support", "Free Merch"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Membership Plans</h2>
        <p className="text-gray text-xl font-bold mb-12">Choose the best fit</p>

        {/* Pricing Cards */}
        <div className="flex flex-wrap gap-6 justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray/10 rounded-2xl p-8 w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between text-left ${
                plan.highlight ? "border-2 border-white" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-1">{plan.price}</p>
                <p className="text-sm text-gray-400 mb-6">Monthly: {plan.monthlyPrice}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-[#f39f45]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

             <a
  href="#contact"
  className={`block text-center w-full py-2 rounded-md font-semibold mt-auto ${
    plan.highlight
      ? "bg-white text-black hover:bg-[#f39f45] transition"
      : "bg-black border border-white text-white hover:bg-[#f39f45] hover:text-black transition duration-200 ease-in-out"
  }`}
>
  Sign Up
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
