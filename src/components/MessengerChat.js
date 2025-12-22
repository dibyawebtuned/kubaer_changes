"use client";

import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const MessengerChat = () => {
  const link = "https://m.me/1465429997091944";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1, y: [0, -10, 0] }}
        transition={{
          y: { duration: 0.6, repeat: Infinity },
          scale: { duration: 0.3 },
        }}
      >
        <button
          onClick={handleClick}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <img
            src="/assets/messengerLogo1.png"
            alt="Kubaer Finance"
            className="object-cover"
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
