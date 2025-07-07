import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7cxzdf",     // your actual service ID
        "template_vg9wmcp",    // your actual template ID
        form.current,
        "PB5f3T1ffg1KWQX2F"    // your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! Please check your email.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-gray py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl text-white sm:text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray mb-4">
            Have a question or want to join? Fill out the form or reach us directly!
          </p>

          <div className="space-y-2 text-gray">
            <div>
              <span className="font-semibold text-white">Address:</span><br />
              Spring Garden, Shahjalal Uposhohor, Sylhet, Bangladesh
            </div>
            <div>
              <span className="font-semibold text-white">Phone:</span><br />
              <a href="tel:01731106006" className="hover:text-[#f39f45]">01731-106006</a>
            </div>
            <div>
              <span className="font-semibold text-white">Email:</span><br />
              <a href="mailto:bootcampfitnessclub@gmail.com" className="hover:text-[#f39f45]">bootcampfitnessclub@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-white">Facebook:</span><br />
              <a
                href="https://www.facebook.com/BootCampSylhet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39f45]"
              >
                facebook.com/BootCampSylhet
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">WhatsApp</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="01XXXXXXXXX"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Age</label>
            <input
              type="number"
              name="user_age"
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="Your Age"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Gender</label>
            <div className="relative">
              <select
                name="user_gender"
                required
                className="w-full bg-black text-white p-3 pr-10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f39f45] appearance-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Preferred Plan</label>
            <div className="relative">
              <select
                name="plan"
                required
                className="w-full bg-black text-white p-3 pr-10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f39f45] appearance-none"
              >
                <option value="">Choose a Plan</option>
                <option value="Basic (3 Months)">Basic (3 Months)</option>
                <option value="Standard (6 Months)">Standard (6 Months)</option>
                <option value="Premium (1 Year)">Premium (1 Year)</option>
                <option value="Lifetime">Lifetime</option>
                <option value="Personal Training">Personal Training</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              
              rows="5"
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-[#f39f45] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
