import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ show, onClose, onConfirm, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-5 right-5 z-50"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="bg-green-600 text-white rounded-xl shadow-lg p-4 flex items-center gap-4 min-w-[250px]">
            {/* Success Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{message}</span>
            <div className="ml-auto flex gap-2">
              <button
                className="px-3 py-1 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition"
                onClick={onConfirm}
              >
                Download
              </button>
              <button
                className="px-3 py-1 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
