import './styles.css';
import Header from './components/mainPage';
import ProjectSection from './components/projectsSection';
import SkillsSection from './components/skillsSection';
import ServiceSection from './components/servicesSection';
import ContactSection from './components/contactSection';
function App() {
  return (
    <div className="App">
      <Header />
      <ProjectSection />
      <SkillsSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}

export default App;

