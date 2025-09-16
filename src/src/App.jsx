import "./styles/apple-theme.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Skills />
        <Timeline />
      </main>
    </>
  );
}
