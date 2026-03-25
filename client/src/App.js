import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;