import Carousel from "./Carousel";
import { images } from "../lib/data";

export default function Work() {
  return (
    <section className="p-10">
      <div className="border-y-2 h-full flex flex-col items-center justify-center sm:grid sm:grid-cols-2 p-4">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold">Collaborate with brands</h1>
            <h1 className="text-3xl font-bold">Ensure the best results.</h1>
            <p className="text-lg text-gray-500">
              Hats, bags, shirts, you name it. Check us out.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <Carousel slides={images} />
        </div>
      </div>
    </section>
  );
}
