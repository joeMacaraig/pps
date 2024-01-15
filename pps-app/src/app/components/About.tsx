import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="w-full h-full grid grid-cols-2 place-items-stretch">
        <div className="h-[95vh] w-3/4 flex items-center justify-center bg-black">
          Image
        </div>
        <div className="p-8 flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold">Header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="p-8 flex items-center justify-center ">
          <div>
            <h1 className="text-4xl font-bold">Header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="h-[95vh] w-3/4 flex bg-black place-self-end ">
          Image
        </div>
      </div>
    </section>
  );
}
