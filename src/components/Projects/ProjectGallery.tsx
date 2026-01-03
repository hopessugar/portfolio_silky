import type { ProjectGalleryProps } from '../../types';
import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '../../utils';

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, onProjectClick }) => {
  const featuredProjects = getFeaturedProjects(projects);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-24 fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
              Selected Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl luxury-heading mb-8">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-8"></div>
          <p className="text-xl premium-text max-w-3xl mx-auto leading-relaxed">
            A curated selection of recent projects showcasing expertise in full-stack development, 
            sophisticated design, and cutting-edge web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              <ProjectCard 
                project={project} 
                onProjectClick={onProjectClick}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up animation-delay-800">
          <div className="luxury-card p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl luxury-heading mb-6">Ready to Create Something Extraordinary?</h3>
            <p className="text-xl premium-text mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with exceptional design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary group"
              >
                <span className="flex items-center">
                  Start a Project
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/vyassilky', '_blank')}
                className="btn-secondary group"
              >
                <span className="flex items-center">
                  View LinkedIn
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};