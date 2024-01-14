"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section id="home">
      <motion.div
        className="flex flex-col items-center justify-center h-[90vh] bg-slate-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="w-full h-full grid grid-cols-2 gap-4 place-items-center">
          <div className="font-bold w-1/2">
            <p className="text-4xl tracking-widest">Print Your Passion</p>
            <p className="text-4xl tracking-widest">Wear Your Story!</p>
            <p className="w-full text-sm font-medium ">
              <span className="font-bold ">Hey there!</span> This is your
              gateway to a world of personalized fashion and self-expression!
            </p>
          </div>
          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
            Image
          </div>
        </div>
        {/* <div className="h-full w-full">
          <Image
            src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="clothes"
            width={100}
            height={100}
            layout="responsive"
          />
        </div> */}
        {/* <div className="absolute flex flex-col items-center bg-white bg-opacity-50 h-full w-full">
          <div className="uppercase font-medium ">
            <p className="text-6xl tracking-wider">Print Your Passion</p>
            <p className="text-6xl tracking-wider">Wear Your Story!</p>
          </div>
          <p className="text-lg text-gray-400">
            Your gateway to a world of personalized fashion and self-expression!
          </p>
        </div> */}
      </motion.div>
    </section>
  );
}
