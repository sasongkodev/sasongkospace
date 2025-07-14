import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
