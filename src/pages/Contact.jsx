import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChessKnight,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-28 text-gray-900 font-[Inter]">
      {/* HERO / Intro */}
      <section className="relative text-center py-16 px-5 overflow-hidden">
        {/* Floating Chess Piece */}
        <motion.span
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-10 top-12 text-[70px] opacity-20 text-yellow-500"
        >
          ♞
        </motion.span>
        <motion.span
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute right-10 bottom-12 text-[80px] opacity-20 text-yellow-500"
        >
          ♛
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Have questions or want to join the academy? Reach out to us and we’ll
          get back to you promptly.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-5 py-16 text-center">
        {[
          {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            text: "123 Chess Street, Your City, Country",
          },
          { icon: <FaPhoneAlt />, title: "Phone", text: "+1 (555) 123-4567" },
          {
            icon: <FaEnvelope />,
            title: "Email",
            text: "info@royalchessacademy.com",
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass bg-white/50 rounded-xl border border-yellow-200 shadow-xl p-8 backdrop-blur-lg"
          >
            <div className="text-4xl text-yellow-600 mb-3 flex justify-center">
              {info.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-1">
              {info.title}
            </h3>
            <p className="text-gray-600">{info.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-5 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-yellow-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl border border-yellow-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-5 py-3 rounded-xl border border-yellow-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-xl border border-yellow-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* CTA */}
      <section className="cta-banner text-center py-20 px-5">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Join Royal Chess Academy Today!
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cta-banner__button"
        >
          Enroll Now
        </motion.button>
      </section>
    </div>
  );
}
