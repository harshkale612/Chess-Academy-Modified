import { motion } from "framer-motion";
import {
  FaChessKing,
  FaUsers,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaChessKing />,
      title: "Expert Coaches",
      text: "Guidance from national & international trainers.",
    },
    {
      icon: <FaUsers />,
      title: "Personal Attention",
      text: "Small-batch training with focused mentorship.",
    },
    {
      icon: <FaAward />,
      title: "Proven Success",
      text: "Students ranked in national & state tournaments.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Modern Curriculum",
      text: "Structured lessons, analytics, and strategy training.",
    },
  ];

  const coaches = [
    {
      img: "https://cdn.pixabay.com/photo/2020/06/26/14/48/india-5342939_640.jpg",
      name: "GM Aryan Bhatt",
      role: "Grandmaster & Head Coach",
      desc: "Former national champion with 18+ years of elite coaching. Leads Olympiad squads and mentors top 200 FIDE talents.",
      specialties: ["Opening Prep", "Tournament Strategy", "Endgame Mastery"],
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      name: "IM Riya Sethi",
      role: "International Master",
      desc: "Specialises in building disciplined calculation, resilience, and creative attacking play for rising prodigies.",
      specialties: ["Dynamic Attacks", "Game Analysis", "Mindset Coaching"],
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/08/29/09/00/men-4438572_640.jpg",
      name: "Coach Rahul Mehra",
      role: "National Certified Trainer",
      desc: "Certified mentor designing structured journeys for scholastic teams and competitive youth achievers.",
      specialties: ["Curriculum Design", "Youth Development", "Strategy Labs"],
    },
  ];

  return (
    <div className="pt-28 text-gray-900 font-[Inter]">
      {/* HERO */}
      <section className="text-center py-16 px-5">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400"
        >
          About Our Chess Academy ♟️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl"
        >
          We cultivate strategic thinking, discipline, and confidence through
          world-class chess training for all ages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/10/27/14/37/chess-game-9153597_640.jpg"
            alt="Grandmaster teaching chess"
            className="rounded-3xl shadow-2xl max-w-xl w-full object-cover"
          />
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-20 px-5 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Shaping intellectual champions by developing critical thinking,
            patience, and creativity through chess. Chess is a lifelong asset
            that builds strong decision-makers and leaders.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1741790009218-d0cc7440a3c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3MlMjB0b3VybmFtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
          alt="Students learning chess with coach guidance"
          className="rounded-2xl shadow-md w-full object-cover"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-20 px-5 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass bg-white/50 rounded-xl border border-yellow-200 shadow-xl p-6 backdrop-blur-lg"
            >
              <div className="text-4xl text-yellow-600 mb-3 flex justify-center">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COACHES */}
      <section className="coach-section py-20 px-5">
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-4 text-(--theme-text-primary)"
          >
            Meet Our Coaches
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="coach-section__intro"
          >
            A world-class team blending championship pedigree with compassionate mentorship. Every coach crafts a bespoke path that sparks confidence, discipline, and creative play.
          </motion.p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="coach-card"
              >
                <div className="coach-card__avatar-wrapper">
                  <img src={coach.img} alt={coach.name} className="coach-card__avatar" />
                </div>

                <h3 className="coach-card__name">{coach.name}</h3>
                <span className="coach-card__role">{coach.role}</span>
                <p className="coach-card__desc">{coach.desc}</p>

                <div className="coach-card__chips">
                  {coach.specialties.map((item) => (
                    <span key={`${coach.name}-${item}`} className="coach-card__chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-5">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-400 py-10 rounded-3xl text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Chess Journey?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Start learning from the best and unlock your full potential.
          </p>
          <a
            href="/contact"
            className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold shadow hover:shadow-2xl transition"
          >
            Join Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
