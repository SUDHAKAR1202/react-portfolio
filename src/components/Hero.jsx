import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useTypewriter(
  words = [],
  typingSpeed = 120,
  deletingSpeed = 50,
  delayBetween = 1500,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return text;
}

const Hero = () => {
  const roles = [
    "Front-end Developer",
    "React Enthusiast",
    "UI/UX Tweaker",
    "Open-Source Contributor",
  ];
  const typeText = useTypewriter(roles);

  return (
    <header
      id="home"
      className="pt-32 pb-20 flex flex-col items-center text-center px-6"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold"
      >
        Hi, I’m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
          Gmk Sudhakar
        </span>
      </motion.h1>
      <br />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.jpg"
          alt="Gmk Sudhakar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl"
        />
      </motion.div>

      <motion.h2
        className="mt-4 text-2xl sm:text-3xl font-semibold text-indigo-100/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span>{typeText}</span>
        <span className="inline-block w-1 h-6 bg-indigo-300 ml-1 animate-pulse" />
      </motion.h2>

      <p className="mt-6 max-w-2xl text-slate-300/80">
        I specialize in crafting seamless digital experiences by combining
        intuitive frontend design with powerful backend systems. With hands-on
        experience in building dynamic dashboards, integrating APIs, and
        optimizing performance, I focus on delivering fast, scalable, and
        user-friendly web applications. I enjoy turning complex requirements
        into clean, efficient, and impactful solutions.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:scale-105 transform transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-indigo-400 hover:bg-white/10"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Hero;
