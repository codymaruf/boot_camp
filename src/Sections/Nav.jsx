import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            className="h-10 w-10 rounded-full mr-3"
            src="/assets/bootcamp.jpg"
            alt="Boot Camp Fitness Logo"
          /> */}
          <span className="font-bold text-white">
            BootCamp
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-orange transition"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-orange"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-orange text-black px-4 py-2 rounded-md font-semibold text-center"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
