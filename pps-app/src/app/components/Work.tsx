import Carousel from "./Carousel";
import { images as slides } from "../lib/data";

export default function Work() {
  return (
    <section className="p-10">
      <div className="border-y-2 h-full p-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center sm:grid sm:grid-cols-2">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-3xl font-bold">Collaborate with brands,</h1>
              <h1 className="text-3xl font-bold">Ensure the best results.</h1>
              <p className="text-lg font-medium">
                We print on hats, bags, shirts, you name it.
              </p>
              <p className="text-sm pb-4 text-slate-500">
                For more of our work, checkout our page on instagram:{" "}
                <span className="font-medium text-black">
                  <a href="https://www.instagram.com/palasadeprintingsupply/">
                    @palasadeprintingsupply
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
}
