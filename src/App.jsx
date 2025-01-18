import Home from "./components/Hero.jsx";
import "./App.css";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
