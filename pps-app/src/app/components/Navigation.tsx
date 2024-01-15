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
      className={`py-4 px-6 fixed z-10 w-full bg-white shadow-lg transition-transform ease-in-out duration-300 ${
        scrolling ? "" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between">
        <Link href={links[0].hash} className="text-3xl font-bold">
          Logo
        </Link>
        <div className="flex items-center gap-10 font-medium text-lg">
          {links.slice(1).map((link, index) => (
            <Link key={index} href={link.hash}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
