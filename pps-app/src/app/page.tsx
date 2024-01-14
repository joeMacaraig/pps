import About from "./components/About";
import Contact from "./components/Contact";
import Creator from "./components/Creator";
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
      <Creator />
      <Contact />
    </>
  );
}
