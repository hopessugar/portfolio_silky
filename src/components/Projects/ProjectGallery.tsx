import type { ProjectGalleryProps } from '../../types';
import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '../../utils';

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, onProjectClick }) => {
  const featuredProjects = getFeaturedProjects(projects);

  return (
    <section id="work" className="section-padding bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container-custom">
        {/* Mobile-first Section Header */}
        <div className="text-center mb-16 md:mb-24 fade-in-up">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="mobile-heading-lg luxury-heading mb-6 md:mb-8">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-6 md:mb-8"></div>
          <p className="mobile-text-lg premium-text max-w-3xl mx-auto leading-relaxed px-4">
            Real results for real businesses. Each project represents a strategic partnership focused on growth, performance, and measurable outcomes.
          </p>
        </div>

        {/* Mobile-first Projects Grid: Single column on mobile */}
        <div className="mobile-grid-2 mobile-card-gap">
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
      </div>
    </section>
  );
};