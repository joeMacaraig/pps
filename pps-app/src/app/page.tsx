import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Mission from "./components/Mission";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Landing />
      <Mission />
      <About />
      <Work />
      <Contact />
    </>
  );
}
