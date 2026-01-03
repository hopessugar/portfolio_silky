import type { Project } from '../../types';
import { formatDate } from '../../utils';

interface ProjectCardProps {
  project: Project;
  onProjectClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick }) => {
  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  const handleVisitProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="group luxury-card p-0 overflow-hidden cursor-pointer touch-target-comfortable"
      onClick={handleClick}
    >
      {/* Mobile-first Project Header */}
      <div className="p-6 md:p-8 lg:p-10 pb-6 md:pb-8">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-2 h-2 bg-slate-900 rounded-full flex-shrink-0"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium truncate">
                {project.category} • {formatDate(project.completionDate)}
              </span>
            </div>
            {/* Mobile-first: Responsive heading */}
            <h3 className="text-2xl md:text-3xl luxury-heading mb-3 md:mb-4 group-hover:text-slate-700 transition-colors leading-tight">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <div className="bg-slate-900 text-white px-3 py-1.5 md:px-4 md:py-2 text-xs uppercase tracking-wider font-medium rounded-full flex-shrink-0 ml-2">
              Featured
            </div>
          )}
        </div>

        {/* Mobile-optimized description */}
        <p className="premium-text text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          {project.description}
        </p>

        {/* Mobile-first: Touch-optimized Visit Project Button */}
        <button
          onClick={handleVisitProject}
          className="inline-flex items-center premium-text hover:text-slate-900 transition-all duration-300 font-medium group/btn border-b border-slate-200 hover:border-slate-900 pb-1 touch-target"
        >
          <span>Visit Live Site</span>
          <svg className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      {/* Mobile-first Technologies */}
      <div className="px-6 md:px-8 lg:px-10 pb-6 md:pb-8">
        <div className="border-t border-slate-100 pt-6 md:pt-8">
          <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-4 md:mb-6">
            Technologies Used
          </h4>
          {/* Mobile-optimized technology tags */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-50 text-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium rounded-full border border-slate-100 hover:bg-slate-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile-first Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="border-t border-slate-100 pt-6 md:pt-8 mt-6 md:mt-8">
            <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-4 md:mb-6">
              Key Achievements
            </h4>
            {/* Mobile-first: Single column on mobile, two columns on larger screens */}
            <div className="mobile-grid-2 gap-3 md:gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 md:mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="premium-text text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile-optimized hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};