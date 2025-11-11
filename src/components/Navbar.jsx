import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative font-medium text-gray-700 hover:text-black transition duration-200";

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
          fixed top-0 left-0 w-full z-50 
          bg-white/70 backdrop-blur-xl border-b border-white/30
          shadow-md
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
          {/* BRAND */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-2 rounded-xl shadow-md"
            >
              <Crown size={22} />
            </motion.div>
            <span className="font-bold text-lg text-gray-900 group-hover:text-black tracking-tight">
              Royal Chess Academy
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkBase}>
                {({ isActive }) => (
                  <span className="relative">
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-[2px] bg-yellow-500 rounded-full bottom-0"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="
                fixed top-0 right-0 h-full w-72 z-50 bg-white 
                shadow-lg p-6 flex flex-col gap-6
              "
            >
              <button
                className="self-end text-gray-700"
                onClick={() => setOpen(false)}
              >
                <X size={26} />
              </button>

              <ThemeToggle className="md:hidden w-full justify-center" />

              {links.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className="block text-gray-800 text-lg font-medium hover:text-black tracking-tight"
                  >
                    {l.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
