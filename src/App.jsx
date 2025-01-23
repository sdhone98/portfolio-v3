import Home from "./components/Hero.jsx";
import "./App.css";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import BottomTab from "./components/BottomTab.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <BottomTab />
    </>
  );
}

export default App;
