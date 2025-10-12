import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-slate-100">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-slate-400 border-t border-slate-700">
        © {new Date().getFullYear()} Gmk Sudhakar — Built with React & Tailwind
      </footer>
    </div>
  );
}
