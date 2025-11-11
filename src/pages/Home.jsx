import { motion } from "framer-motion";
import chessBg from "../assets/chess.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaChessQueen,
  FaUsers,
  FaChalkboardTeacher,
  FaTrophy,
  FaStar,
  FaChessBoard,
  FaCrown,
  FaQuoteLeft,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Home() {
  // Typewriter effect for Hero
  const [text] = useTypewriter({
    words: [
      "Master The Board.",
      "Think Like a Grandmaster.",
      "Become Unstoppable.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Courses
  const courses = [
    {
      title: "Beginner Chess Program",
      level: "Level 1",
      desc: "Foundation course for new players — learn rules, basic strategies, openings & checkmating patterns.",
      duration: "8 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/17/50/king-1846807_640.jpg",
      icon: <FaChessBoard />,
    },
    {
      title: "Intermediate Training",
      level: "Level 2",
      desc: "Tactical skills, middlegame planning, endgames, tournament psychology & openings.",
      duration: "12 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2016/09/29/12/54/chess-1702761_640.jpg",
      icon: <FaStar />,
    },
    {
      title: "Advanced & Tournament Prep",
      level: "Level 3",
      desc: "Professional coaching, advanced openings, endgame mastery, tournament simulation & performance review.",
      duration: "16 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2017/09/22/16/28/chess-2776219_1280.jpg",
      icon: <FaCrown />,
    },
  ];

  // Achievements
  const achievements = [
    "12+ National Chess Champions trained",
    "Students selected for FIDE World Cup",
    "40+ State championship titles",
    "Scholarships secured at top institutions",
  ];

  // Tournaments
  const tournaments = [
    {
      title: "Winter Rapid Championship",
      date: "January 15, 2025",
      mode: "Rapid - 10+5",
      image:
        "https://images.unsplash.com/photo-1543756070-dd3109556b0e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Junior Blitz Cup",
      date: "February 02, 2025",
      mode: "Blitz - 5+3",
      image:
        "https://images.unsplash.com/photo-1697753594579-67cf2c2a88d9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Open Classical League",
      date: "March 12, 2025",
      mode: "Classical - 60+10",
      image:
        "https://images.unsplash.com/photo-1739416333363-4b01dd9874c0?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Aarav Patel",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "I improved from 1200 → 2000 Elo in one year! The structure and personal feedback made all the difference.",
    },
    {
      name: "Sara Iyer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Professional coaches who genuinely care. Every session is inspiring and fun.",
    },
    {
      name: "Rohan Mehta",
      photo: "https://randomuser.me/api/portraits/men/50.jpg",
      review:
        "Great environment and training support — I feel part of a true chess family!",
    },
    {
      name: "Kavya Sharma",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "I gained so much confidence in my strategy and game analysis. Totally worth it!",
    },
  ];

  return (
    <div className="pt-18 font-[Inter] text-gray-900">
      {/* HERO */}

      <section
        className="relative text-center pt-12 pb-36 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
        style={{
          backgroundImage: `url(${chessBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Floating Chess Icons */}
        <motion.span
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute left-10 top-20 text-[60px] opacity-20 text-yellow-400"
        >
          ♞
        </motion.span>
        <motion.span
          animate={{ y: [0, 15, -15, 0], rotate: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute right-10 top-32 text-[70px] opacity-20 text-yellow-500"
        >
          ♛
        </motion.span>
        <motion.span
          animate={{ y: [0, -10, 10, 0], x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute left-1/2 top-10 text-[50px] opacity-15 text-yellow-400 -translate-x-1/2"
        >
          ♟
        </motion.span>

        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            {text}
            <Cursor cursorStyle="|" />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 backdrop-blur-sm bg-white/10 rounded-lg inline-block px-4 py-3 shadow-md">
            Join our elite chess academy and sharpen your skills to compete at
            the highest levels worldwide.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold rounded-full shadow-lg hover:shadow-yellow-400/40 transition duration-300"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Soft Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"></div>
      </section>

      {/* COURSES */}
      <section className="py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 border-t-4 border-yellow-500 flex flex-col"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-yellow-600 text-2xl">
                {c.icon}
                <p className="font-bold text-gray-800">{c.level}</p>
              </div>
              <h3 className="font-bold text-xl mb-2">{c.title}</h3>
              <p className="text-gray-600 flex-1">{c.desc}</p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-yellow-600 font-semibold text-sm">
                  ⏳ {c.duration}
                </span>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition"
                >
                  Enroll
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-yellow-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 border-l-4 border-yellow-500 pl-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-gray-700 font-medium flex items-center gap-3"
            >
              <FaTrophy className="text-yellow-500 text-2xl" />
              {a}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Tournaments
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tournaments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={t.image}
                alt={t.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm">📅 {t.date}</p>
                <p className="text-gray-600 text-sm mb-4">⌛ {t.mode}</p>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[var(--theme-highlight)]">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-md border border-[var(--theme-border-soft)]"
              style={{
                background: "var(--theme-surface-primary)",
                transition: "var(--theme-transition)",
              }}
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[var(--theme-highlight)]"
              />
              <FaQuoteLeft className="text-[var(--theme-highlight)] text-xl mx-auto mb-3" />
              <p className="italic text-[var(--theme-text-secondary)] mb-4">
                “{t.review}”
              </p>
              <h4 className="font-semibold text-[var(--theme-primary)]">
                {t.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <motion.h3
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Ready To Become A Chess Champion?
        </motion.h3>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-full text-lg shadow-xl hover:shadow-2xl transition duration-300 font-semibold"
          >
            Enroll Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
