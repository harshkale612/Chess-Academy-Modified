import { motion } from "framer-motion";
import { FaStar, FaChessBoard, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      title: "Beginner Chess Program",
      level: "Level 1",
      desc: "Foundation course for new players — learn rules, basic strategies, openings & checkmating patterns.",
      duration: "8 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/17/50/king-1846807_640.jpg",
      imageDesc: "Kids learning basic chess with coach guidance",
      icon: <FaChessBoard />,
    },
    {
      title: "Intermediate Training",
      level: "Level 2",
      desc: "Tactical skills, middlegame planning, endgames, tournament psychology & openings.",
      duration: "12 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2016/09/29/12/54/chess-1702761_640.jpg",
      imageDesc: "Students practicing tactical puzzles & analyzing boards",
      icon: <FaStar />,
    },
    {
      title: "Advanced & Tournament Prep",
      level: "Level 3",
      desc: "Professional coaching, advanced openings, endgame mastery, tournament simulation & performance review.",
      duration: "16 Weeks",
      image:
        "https://cdn.pixabay.com/photo/2017/09/22/16/28/chess-2776219_1280.jpg",
      imageDesc: "Advanced students training for competitions",
      icon: <FaCrown />,
    },
  ];

  return (
    <div className="pt-28 space-y-20 text-gray-900 font-[Inter]">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-5"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
          Our Training Programs
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Tailored courses for every skill level — from beginners to tournament
          champions.
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-yellow-500 overflow-hidden flex flex-col"
          >
            {/* Course Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.imageDesc}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Course Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3 text-yellow-600 text-2xl">
                {c.icon}
                <span className="font-bold text-gray-800">{c.level}</span>
              </div>
              <h2 className="font-bold text-xl mb-2 text-gray-900">
                {c.title}
              </h2>
              <p className="text-gray-600 flex-1">{c.desc}</p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-yellow-600 font-semibold text-sm">
                  ⏳ Duration: {c.duration}
                </span>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition"
                >
                  Enroll
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-600 to-amber-500 text-white p-12 rounded-2xl text-center shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
        <p className="mb-6 text-lg">
          Get a free skill assessment session with our coaches.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-white text-yellow-700 font-bold rounded-full shadow-md hover:scale-110 transition"
        >
          Book Free Counseling
        </Link>
      </motion.div>
    </div>
  );
}
