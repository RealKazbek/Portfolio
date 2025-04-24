import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
// import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Experience />
      <Projects />
      <Footer /> */}
    </>
  );
}

export default App;