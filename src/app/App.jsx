import "./App.css";

import { Hero } from "../components/hero/hero";
import { NavBar } from "../components/navbar/navbar";
import { Biography } from "../components/biography/biography";
import { WorkExperience } from "../components/work-experience/work-experience";
import { Projects } from "../components/projects/projects";

export function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Biography />
      <WorkExperience />
      <Projects />
    </main>
  );
}
