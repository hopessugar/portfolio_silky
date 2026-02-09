import { portfolioConfig } from './data/portfolio-config';
import { AgencyHero } from './components/Hero/AgencyHero';
import { Positioning } from './components/Positioning';
import { AgencyServices } from './components/Services';
import { Process } from './components/Process';
import { ProjectGallery } from './components/Projects';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';

function App() {
  const { agency, projects, services, process } = portfolioConfig;

  // Fallback to personal if agency not defined (for backward compatibility)
  const agencyInfo = agency || {
    name: portfolioConfig.personal?.name || 'Sivara Solutions',
    tagline: 'Strategy-led websites and automation built to help Indian brands grow online',
    heroHeadline: 'Strategy-led websites and automation built to help Indian brands grow online.',
    heroSubtext: 'We design digital systems with clarity, purpose, and performance — built to convert and scale.',
    phone: portfolioConfig.personal?.phone || '',
    email: portfolioConfig.personal?.email || '',
    location: portfolioConfig.personal?.location || '',
    socialLinks: portfolioConfig.personal?.socialLinks || [],
    positioning: []
  };

  const handleProjectClick = (project: any) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactSubmit = async (formData: any): Promise<void> => {
    // Create WhatsApp message with form data
    const message = `Hi, I saw your agency website and would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}
${formData.budget ? `Budget: ${formData.budget}` : ''}

Project Details:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${agencyInfo.phone}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Return resolved promise to show success message
    return Promise.resolve();
  };

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <AgencyHero agency={agencyInfo} />
      {agencyInfo.positioning && agencyInfo.positioning.length > 0 && (
        <Positioning principles={agencyInfo.positioning} />
      )}
      <AgencyServices services={services} />
      {process && process.length > 0 && (
        <Process phases={process} />
      )}
      <ProjectGallery projects={projects} onProjectClick={handleProjectClick} />
      <FinalCTA onStartProject={handleStartProject} />
      <Contact personal={agencyInfo as any} onSubmit={handleContactSubmit} />
    </div>
  );
}

export default App;