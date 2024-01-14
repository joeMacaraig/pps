import React from "react";

export default function Creator() {
  return (
    <section id="creator">
      <div className="grid grid-cols-2">
        <div className="w-full bg-slate-100 p-8 flex flex-col items-center justify-center">
          <div>
            <h1 className="font-bold text-4xl">Meet the Creator</h1>
            <p>Get to know the creator</p>
            <div className="h-80 w-80 bg-black"></div>
            <div className="w-80 grid grid-cols-2 py-2">
              <p className="font-bold">Rob</p>
              <div className="flex gap-2 place-self-end">
                <div className="py-2 px-4 rounded bg-gray-200 hover:-translate-y-1 transition duration-300 ease-in-out">x</div>
                <div className="py-2 px-4 rounded bg-gray-200 hover:-translate-y-1 transition duration-300 ease-in-out">x</div>
              </div>
              <p className="font-medium text-gray-400">Founder</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 place-self-center"></div>
      </div>
    </section>
  );
}
