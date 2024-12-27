
import './App.css'
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Interests />
      <Skills />
      <Work />
      <Education />
      <Projects />
    </div>
  );
}
