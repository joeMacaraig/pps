"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Landing() {
  return (
    <section id="home" className="">
      <motion.div
        className="flex flex-col items-center justify-center h-full relative overflow-hidden p-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-4 md:place-items-center">
          <div className="font-bold w-full p-10 md:w-2/3 sm:p-0">
            <p className="text-4xl tracking-widest">Print Your Passion</p>
            <p className="text-4xl tracking-widest">Wear Your Story!</p>
            <p className="w-full text-sm font-medium ">
              <span className="font-bold ">Hey there!</span> This is your
              gateway to a world of personalized fashion and self-expression!
            </p>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/271400164_452856236485388_3957548149128236730_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=LdTxzRXkZPYAX9RaFm9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0NzAyOTE4ODQ4Mjc3OTc5OQ%3D%3D.2-ccb7-5&oh=00_AfA_75tm9Qq7haX94tXZfSQ4aq0TNx_cQMYt2xL6VoLrDg&oe=65B32DEA&_nc_sid=fc8dfb"
              width={100}
              height={100}
              className="shadow-lg"
              layout="responsive"
              alt="store-front"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
