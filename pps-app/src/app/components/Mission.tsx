"use client";
import React from "react";
import { motion } from "framer-motion";
export default function () {
  return (
    <section id="mission">
      <motion.div
        className="h-[30vh] flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl mb-8 tracking-wide">
            Who are we?
          </h1>
          <p className="w-1/2 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
