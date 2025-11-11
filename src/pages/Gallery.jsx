import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import { FaChessKnight, FaChessQueen } from "react-icons/fa";

const images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1699743570117-91384b4b0400?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjB0b3VybmFtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    alt: "Kids learning chess in classroom",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2016/11/21/17/50/king-1846807_640.jpg",
    alt: "Chess Instructor teaching strategy",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2015/12/07/10/40/strategy-1080528_640.jpg",
    alt: "Chess tournament award ceremony",
  },
  {
    id: 4,
    img: "https://plus.unsplash.com/premium_photo-1661866793275-e07ceba69b5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENoZXNzJTIwQ2hhbXBpb25zaGlwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    alt: "Kids competing in chess tournament",
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2018/11/03/04/57/chess-3791454_640.jpg",
    alt: "Chess club weekend practice",
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2021/02/03/22/20/chess-5979590_640.jpg",
    alt: "Student analyzing chess board",
  },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400"
      >
        📸 Our Chess Journey
      </motion.h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
        Explore moments from our coaching sessions, tournaments, workshops, and
        student success stories.
      </p>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 max-w-7xl mx-auto mb-14 md:mb-16"
      >
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg bg-white border border-yellow-200"
            onClick={() => setSelectedImageIndex(i)}
          >
            <img
              src={img.img}
              alt={img.alt}
              className="w-full h-64 object-cover group-hover:brightness-90 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNavigate={(newIndex) => setSelectedImageIndex(newIndex)}
        />
      )}

      {/* CTA */}
      <section className="cta-banner text-center py-24 px-5 mt-12 md:mt-16">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Inspired to Master Chess?
        </motion.h3>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="cta-banner__button inline-block"
          >
            Join Our Academy
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
