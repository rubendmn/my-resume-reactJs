import { createContext } from "react";
import Hero from "./components/elements/Hero";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Educations from "./components/sections/Educations";
import Certifications from "./components/sections/Certifications";
import Experience from "./components/sections/Experience";
import Articles from "./components/sections/Articles";
import ContactMe from "./components/sections/ContactMe";

import { useResumes } from './hooks/useResume';

export const ResumeContext = createContext();

export default function App() {
  
    const {resume } = useResumes();
    
    return (
      resume!= null &&
      <div>
          <ResumeContext.Provider value={{resume}}>         
             <header>
                <Hero />
             </header>
             <main>
                <AboutMe />
                <Skills />
                <Certifications />
                <Experience />
                <Educations />
                <Articles />
            </main>
            <footer >
              <ContactMe />
            </footer>
        </ResumeContext.Provider>
      </div>
    );
  
}



