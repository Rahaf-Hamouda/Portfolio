import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
// import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
