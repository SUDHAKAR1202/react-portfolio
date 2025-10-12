import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Portfolio Website", 
    description: "A fully responsive, modern portfolio website built with React and Tailwind CSS. Features smooth animations with Framer Motion, a typewriter effect for dynamic text, sections for projects, contact form, and download CV functionality. Optimized for mobile and desktop views.", 
    image: "/portfolio.jpg",
    link: "#" 
  },
  { 
    title: "E-commerce Store", 
    description: "An online e-commerce store built using the MERN stack (MongoDB, Express, React, Node.js). Features include product listing, shopping cart, secure checkout with Stripe integration, user authentication, and admin dashboard for managing products and orders.", 
    image: "/ecommerce.jpg",
    link: "#" 
  },
  { 
    title: "Chat Application", 
    description: "A real-time chat application built with Socket.IO and Node.js. Users can join chat rooms, send instant messages, and see live updates from other users. Includes user authentication, private messaging, and a responsive UI for desktop and mobile devices.", 
    image: "/chat.jpg",
    link: "#" 
  },
];


const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-bold mb-10 text-center">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden shadow-lg"
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <div className="p-4 flex flex-col">
              <h4 className="font-semibold mb-2 text-lg">{project.title}</h4>
              <p className="text-slate-300/80 text-sm mb-3 flex-grow">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-400 text-sm hover:underline mt-2"
              >
                View Details →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
