import React from "react";
import { Instagram, Twitter } from "react-feather";
export default function Creator() {
  return (
    <section id="creator">
      <div className="flex items-center justify-center">
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <div>
            <h1 className="font-bold text-4xl mb-4">Meet the Creator</h1>
            <div className="h-80 w-80 bg-black">
              <img
                src="/rob_IM.JPG"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="w-80 grid grid-cols-2 py-2">
              <p className="font-bold">Rob</p>
              <div className="flex gap-2 place-self-end">
                <div className="py-2 px-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:opacity-50 transition duration-300 ease-in-out">
                  <Instagram />
                </div>
                <div className="py-2 px-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:opacity-50 transition duration-300 ease-in-out">
                  <Twitter />
                </div>
              </div>
              <p className="font-medium text-gray-400">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
