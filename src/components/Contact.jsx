import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h3 className="text-2xl font-bold mb-8">Contact Me</h3>
      <p className="text-slate-300/80 mb-6">
        Let’s collaborate on something amazing! Feel free to reach out via the form below.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-slate-900/40 border border-slate-700" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-slate-900/40 border border-slate-700" />
        <textarea placeholder="Your Message" rows="4" className="md:col-span-2 p-3 rounded-md bg-slate-900/40 border border-slate-700" />
        <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-105 transform transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
