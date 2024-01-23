import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="p-4 relative">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center md:grid md:grid-cols-2 md:place-items-stretch gap-10">
        <div className="h-full w-full flex items-center justify-center bg-black">
          <Image
            src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/419078606_1425719855013218_4601907733123642582_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=QGRpDDmPtUgAX_k_WIW&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI4MTkyMDkwNjQzODY3NTU4NA%3D%3D.2-ccb7-5&oh=00_AfCiljDC_b27IAzcL8gmeJEFIFh6WVZ98BVQ-zNctDBYZg&oe=65B48FC4&_nc_sid=ee9879"
            width={100}
            height={100}
            className="shadow-2xl"
            layout="responsive"
            alt="store-front"
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="px-4">
            <h1 className="text-4xl font-bold mb-4">Why We Started.</h1>
            <p className="text-justify w-full ">
              Our journey traces back to the inception of our own venture,
              Palasade, where we sought unique ways to communicate our brand's
              essence. Our team realized that the art of printing offered a
              powerful means of self-expression, enabling us to wear our values
              and visions proudly. Through countless trials, triumphs, and
              creative explorations, our passion for crafting tangible stories
              on fabric grew, resonating with others who sought the same impact.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-4">
            <h1 className="text-4xl font-bold text-left mb-4">
              What We Offer.
            </h1>
            <p className="text-justify w-full ">
              We are more than just a clothing printing company – we are
              creators of personalized art that you can wear and carry with
              pride. Specializing in both embroidery and printing, we infuse
              every stitch and ink drop with a touch of your personality. But we
              don't stop at clothes; our creativity extends to hats, sunglasses,
              totes, etc. turning everyday accessories into statements of
              individuality. And when it comes to presentation, we've got you
              covered with our full-print packaging, bag, and label services. We
              believe in crafting not just products, but experiences that
              reflect your uniqueness, whether you're showcasing your brand,
              expressing yourself, or gifting something truly special. Let us
              transform your ideas into tangible art that speaks volumes.
            </p>
          </div>
        </div>
        <div className="h-full w-full bg-black place-self-end">
          <Image
            src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/419032905_1074487240432824_118858493023842403_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=oSY7qeJ5FBkAX-jx7U7&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI4MTkyMDkwNjQzMDQzNjQ1NA%3D%3D.2-ccb7-5&oh=00_AfBDYBKh10lYRZi4-PJkjj10XUKMmviFAURzYu0mc7dPgg&oe=65B2E647&_nc_sid=ee9879"
            width={100}
            height={100}
            className="shadow-2xl"
            layout="responsive"
            alt="store-front"
          />
        </div>
      </div>
    </section>
  );
}
