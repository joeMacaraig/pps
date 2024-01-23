"use client";
import React, { useState, useEffect } from "react";
import { links } from "../lib/data";
import Link from "next/link";

export default function Navigation() {
  const [scrolling, setScrolling] = useState(true);
  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrolledDown = prevScroll < currentScroll;
      setScrolling(!scrolledDown);
      prevScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`py-4 px-6 sticky z-10 top-0 w-full bg-white shadow-lg transition-transform ease-in-out duration-300 ${
        scrolling ? "" : "-translate-y-full"
      }`}
    >
      <nav className="flex flex-col items-center md:grid md:grid-cols-2  gap-2 w-full">
        <Link
          href={links[0].hash}
          className="text-3xl md:text-2xl tracking-tight font-bold"
        >
          PalasadePrintingSupply.
        </Link>
        <div className="flex items-center md:place-self-end gap-4 font-medium text-lg">
          {links.slice(1).map((link, index) => (
            <Link key={index} href={link.hash} className="bg-black py-1 px-4 rounded-full text-white font-medium md:bg-white md:text-black transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 md:hover:scale-100 md:hover:translate-y-0 md:hover:opacity-75">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
