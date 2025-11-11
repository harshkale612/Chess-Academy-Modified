import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaChessKnight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Tournaments() {
  const upcoming = [
    {
      title: "Winter Rapid Championship",
      date: "January 15, 2025",
      mode: "Rapid · 10+5",
      image:
        "https://images.unsplash.com/photo-1543756070-dd3109556b0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoZXNzJTIwQ2hhbXBpb25zaGlwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Players seated in a rapid chess tournament hall",
    },
    {
      title: "Junior Blitz Cup",
      date: "February 02, 2025",
      mode: "Blitz · 5+3",
      image:
        "https://images.unsplash.com/photo-1697753594579-67cf2c2a88d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoZXNzJTIwQ2hhbXBpb25zaGlwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Young players competing in a blitz chess match",
    },
    {
      title: "Open Classical League",
      date: "March 12, 2025",
      mode: "Classical · 60+10",
      image:
        "https://images.unsplash.com/photo-1739416333363-4b01dd9874c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoZXNzJTIwQ2hhbXBpb25zaGlwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Classical chess boards set for a league match",
    },
  ];

  const past = [
    {
      title: "Autumn Masters Cup",
      date: "November 03, 2024",
      mode: "Rapid · 15+10",
      summary: "Champion: Aarav K. (8.5/9)",
      image:
        "https://images.chesscomfiles.com/uploads/v1/article/24124.1cdd3505.5000x5000o.35d163bf2ba7.jpeg",
    },
    {
      title: "Monsoon Blitz Showdown",
      date: "August 18, 2024",
      mode: "Blitz · 3+2",
      summary: "Champion: Meera S. (9/11)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6Pjck53ZgJXG_AC6FHVsO_PGV3VBxeN0--L1jKg5Ort33AI6kaw4qSfRf75P6ZxIuhDa14ZVahKaXULR3h194HJp2O1jwS_f6GP7vJ4h&s=10",
      alt: "Chess pieces mid-game on wooden board",
    },
    {
      title: "Summer Open Finals",
      date: "June 29, 2024",
      mode: "Classical · 45+15",
      summary: "Champion: Rohan P. (7/9)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlx8ykPAkDV7U_qtSp72Uim_9wIJpbTpw62Btb9-JouSOXsE1BQVbbLJNyfvrtB57XTnUC6ryKEMbiJORRYG3k5Lg4Tvsfkh4Zlp2Wu7o5&s=10",
      alt: "Audience watching a chess final",
    },
  ];

  const pastWinners = [
    {
      name: "Aarav K.",
      title: "U-14 State Champion",
      trophy: <FaTrophy className="text-yellow-500 text-3xl" />,
    },
    {
      name: "Meera S.",
      title: "Girls U-17 Silver Medalist",
      trophy: <FaMedal className="text-yellow-400 text-3xl" />,
    },
    {
      name: "Rohan P.",
      title: "Inter-School Blitz Winner",
      trophy: <FaChessKnight className="text-yellow-300 text-3xl" />,
    },
  ];

  return (
    <div className="pt-28 text-gray-900 font-[Inter] relative">
      {/* Floating Chess Pieces */}
      <motion.span
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-10 top-10 text-[80px] opacity-20 text-yellow-500"
      >
        ♞
      </motion.span>
      <motion.span
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-10 bottom-10 text-[90px] opacity-20 text-yellow-500"
      >
        ♛
      </motion.span>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
          Chess Tournaments
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Compete against the best. Grow your rating. Win trophies and build a
          champion mindset.
        </p>
      </motion.div>

      {/* Upcoming Tournaments */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Secure your board in our next competitive cycle. Every event includes
          professional arbiters, live analysis, and personalized feedback.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {upcoming.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-200 theme-transition"
            >
              <img
                src={t.image}
                alt={t.alt}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{t.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>📅 {t.date}</span>
                  <span>⌛ {t.mode}</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="max-w-7xl mx-auto px-5 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Recent Highlights
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Relive unforgettable finals, clutch tie-breakers, and champion
          performances from our latest completed events.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {past.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-200 theme-transition"
            >
              <img
                src={event.image}
                alt={event.alt}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>📅 {event.date}</span>
                  <span>⌛ {event.mode}</span>
                </div>
                <p className="text-sm text-gray-600">{event.summary}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="max-w-7xl mx-auto px-5 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-3">Hall of Fame</h2>
        <p className="text-gray-600 mb-10">
          Celebrating our academy champions 🏆
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {pastWinners.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center"
            >
              {w.trophy}
              <h4 className="mt-4 font-bold text-lg">{w.name}</h4>
              <p className="text-gray-600 text-sm">{w.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner text-center py-20 px-6 mx-5 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Ready to Raise Your Rating?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your Tournament Pass to unlock curated prep sessions, game
            analysis labs, and elite sparring partners.
          </p>
          <Link to="/contact" className="cta-banner__button inline-flex">
            Get Tournament Pass
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
