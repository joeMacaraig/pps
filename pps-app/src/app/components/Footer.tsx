import React from "react";
import { links } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col h-full bg-black text-white">
      <div className="p-2 sm:p-8 h-full w-full border-y grid grid-cols-2 gap-4 place-items-stretch">
        <div className="h-full">
          <div className="h-[200px] w-[200px] border">
            <Image
              src="https://palasade.us/cdn/shop/files/star_logo_pin_copy_1200x1200.png?v=1615168625"
              width={100}
              height={100}
              layout="responsive"
              alt="star-logo"
            />
          </div>
          <div className="text-xl font-bold tracking-tight">
            PalasadePrintingSupply.
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium place-self-center">
          {links.map((items, index) => (
            <>
              <Link key={index} href={items.hash}>
                {items.name}
              </Link>
            </>
          ))}
          <Link href="https://palasade.us/">Our Store</Link>
        </div>
      </div>
      <div className="w-full">
        <h1 className="p-4 text-center">
          &copy; 2023 PalasadePrintingSupply. All rights reserved.
        </h1>
      </div>
    </footer>
  );
}
