const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo & tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Boot Camp</h3>
          <p className="text-gray-400 text-sm">
            Sylhet’s home for strength, transformation, and fitness excellence.
          </p>
        </div>

        {/* Middle: Quick links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#f39f45] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📍 Spring Garden, Shahjalal Uposhohor, Sylhet</li>
            <li>📞 01731-106006</li>
            <li>📧 bootcampfitnessclub@gmail.com</li>
            <li>
              🔗{" "}
              <a
                href="https://www.facebook.com/BootCampSylhet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39f45]"
              >
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className=" mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Boot Camp Fitness Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
