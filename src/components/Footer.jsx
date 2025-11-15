import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiChessKing } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 pt-16 pb-8 overflow-hidden">
      {/* Glow Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between mb-12 border border-gray-100"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Join Elite Chess Academy
            </h2>
            <p className="text-gray-600 mt-1">
              Start your journey to becoming a chess champion.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            Enroll Now
          </Link>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-3">
              <GiChessKing className="text-yellow-500" />
              Elite Chess Academy
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Training young minds to become strategic thinkers, disciplined
              players, and future champions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "Courses", link: "/courses" },
                { name: "Tournaments", link: "/tournaments" },
                { name: "Gallery", link: "/gallery" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((i, idx) => (
                <li key={idx}>
                  <Link
                    className="hover:text-yellow-600 transition"
                    to={i.link}
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">
              Contact
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              📍 Pune, Maharashtra, India <br />
              📞 +91-9876543210 <br />
              📧 info@elitechessacademy.com
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">
              Stay Updated
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe for tournament updates & free chess tips
            </p>
            <form className="flex gap-2 w-full flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-500 transition text-sm w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icon */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-500 shadow-sm transition hover:text-orange-600"
            href="https://www.instagram.com/uinsports_official?igsh=MWlyd25mdDExcTduMg%3D%3D&utm_source=qr"
          >
            U
          </motion.a>

          {/* Powered By */}
          <p className="text-gray-500 text-sm text-center">
            Powered by <span className="font-semibold text-gray-700">youinsports</span>
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Elite Chess Academy — All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
