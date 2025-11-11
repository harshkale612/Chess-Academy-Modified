import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Tournaments from "./pages/Tournaments.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/courses"
          element={
            <PageTransition>
              <Courses />
            </PageTransition>
          }
        />

        <Route
          path="/tournaments"
          element={
            <PageTransition>
              <Tournaments />
            </PageTransition>
          }
        />

        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 md:py-12">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
