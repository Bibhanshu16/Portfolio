
import Navbar from './components/Navbar';
import Hellocard from './components/Hellocard';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';


const App = () => {
  return (
    <div>
      <Navbar />
      
      
      <div id="home">
        <Hellocard />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      
      <div id="about-me">
        <AboutMe />
        </div>
      <div id="contact">
        <Contact />
        </div>
  
    </div>

    
  );
};

export default App;