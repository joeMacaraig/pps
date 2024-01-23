"use client";
import React from "react";
import { motion } from "framer-motion";
export default function () {
  return (
    <section id="mission" className="">
      <motion.div
        className="h-full md:h-[30vh] flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl mb-4 tracking-wide">Who are we?</h1>
          <p className="w-full md:w-1/2 leading-tight">
            From a humble beginning as an in-house solution
            <b> PalasadePrinringSupply </b>
            has blossomed into a thriving clothing printing company that fuels
            the aspirations of businesses across diverse industries.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
