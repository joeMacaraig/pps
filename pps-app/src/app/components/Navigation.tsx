import React from "react";
import { links } from "../lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="p-6 fixed z-10 w-full">
      <nav className="flex items-center justify-between">
        <Link href={links[0].hash} className="text-3xl font-bold">Logo</Link>
        <div className="flex items-center gap-10 font-medium text-lg">
          {links.slice(1).map((link, index) => (
            <Link key={index} href={link.hash}>{link.name}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
