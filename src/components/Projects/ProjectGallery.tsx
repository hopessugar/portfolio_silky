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
        {/* Mobile-first Section Header */}
        <div className="text-center mb-16 md:mb-24 fade-in-up">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
              Selected Work
            </span>
          </div>
          <h2 className="mobile-heading-lg luxury-heading mb-6 md:mb-8">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-6 md:mb-8"></div>
          <p className="mobile-text-lg premium-text max-w-3xl mx-auto leading-relaxed px-4">
            A curated selection of recent projects showcasing expertise in full-stack development, 
            sophisticated design, and cutting-edge web technologies.
          </p>
        </div>

        {/* Mobile-first Projects Grid: Single column on mobile */}
        <div className="mobile-grid-2 mobile-card-gap mb-16 md:mb-24">
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

        {/* Mobile-optimized Call to Action */}
        <div className="text-center fade-in-up animation-delay-800">
          <div className="luxury-card max-w-4xl mx-auto">
            {/* Mobile-first: Responsive padding */}
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl luxury-heading mb-4 md:mb-6">Ready to Create Something Extraordinary?</h3>
              <p className="mobile-text-base premium-text mb-8 md:mb-10 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with exceptional design and development.
              </p>
              {/* Mobile-first: Touch-optimized buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary group touch-target-comfortable"
                >
                  <span className="flex items-center justify-center">
                    Start a Project
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => window.open('https://www.linkedin.com/in/vyassilky', '_blank')}
                  className="btn-secondary group touch-target-comfortable"
                >
                  <span className="flex items-center justify-center">
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
      </div>
    </section>
  );
};