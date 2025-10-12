import React, { useState } from "react";
import Toast from "./Toast";


const Navbar = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    
    const link = document.createElement("a");
    link.href = "/GmkSudhakarCV.pdf"; 
    link.download = "GmkSudhakarCV.pdf";
    link.click();

  
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <nav className="w-full py-5 bg-slate-800/70 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
            Portfolio
          </h1>
          <ul className="flex gap-6 items-center text-sm">
            <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact Me</a></li>
            <li>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white transition"
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Toast show={showToast} message="CV downloaded successfully!" />
    </>
  );
};

export default Navbar;
