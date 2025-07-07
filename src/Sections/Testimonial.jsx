const Testimonials = () => {
  const testimonials = [
    {
      quote: "Joining Boot Camp changed my life. The trainers are so motivating.",
      name: "A. Rahman",
      role: "Member",
    },
    {
      quote: "Fantastic classes, amazing equipment, and a great community in Sylhet.",
      name: "M. Ahmed",
      role: "Member",
    },
    {
      quote: "I love the group classes. Every session energizes me!",
      name: "N. Begum",
      role: "Member",
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Real results.</h2>
        <p className="text-gray text-xl mb-10 font-bold">What our members say.</p>

        {/* Cards */}
              <div className="flex flex-col md:flex-row gap-6 flex-wrap">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray/10 rounded-xl p-6 h-60 flex flex-col justify-between text-left w-full md:w-[30%]"
          >
            <p className="text-gray mb-4 italic">“{item.quote}”</p>
            <div>
              <p className="font-semibold text-white/70">{item.name}</p>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
