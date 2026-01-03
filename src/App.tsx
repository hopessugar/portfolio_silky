import { portfolioConfig } from './data/portfolio-config';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const { personal, projects, skills, services } = portfolioConfig;

  const handleProjectClick = (project: any) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactSubmit = async (formData: any): Promise<void> => {
    // Create WhatsApp message with form data
    const message = `Hi Silky, I saw your portfolio and would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}
${formData.budget ? `Budget: ${formData.budget}` : ''}

Project Details:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${personal.phone}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Return resolved promise to show success message
    return Promise.resolve();
  };

  return (
    <div className="min-h-screen">
      <Hero personal={personal} />
      <ProjectGallery projects={projects} onProjectClick={handleProjectClick} />
      <Skills skills={skills} services={services} />
      <Contact personal={personal} onSubmit={handleContactSubmit} />
    </div>
  );
}

export default App;