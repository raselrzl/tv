import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-black text-white p-6 rounded max-w-md w-full max-h-[90vh] overflow-y-auto box-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="mb-4 text-xl font-bold hover:text-gray-400 w-full text-right"
              aria-label="Close modal"
              type="button"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
