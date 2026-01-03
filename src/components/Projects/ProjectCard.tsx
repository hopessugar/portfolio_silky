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
      className="group luxury-card p-0 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Project Header */}
      <div className="p-10 pb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium">
                {project.category} • {formatDate(project.completionDate)}
              </span>
            </div>
            <h3 className="text-3xl luxury-heading mb-4 group-hover:text-slate-700 transition-colors leading-tight">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <div className="bg-slate-900 text-white px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

        <p className="premium-text text-lg leading-relaxed mb-8 max-w-lg">
          {project.description}
        </p>

        {/* Visit Project Button */}
        <button
          onClick={handleVisitProject}
          className="inline-flex items-center premium-text hover:text-slate-900 transition-all duration-300 font-medium group/btn border-b border-slate-200 hover:border-slate-900 pb-1"
        >
          <span>Visit Live Site</span>
          <svg className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      {/* Technologies */}
      <div className="px-10 pb-8">
        <div className="border-t border-slate-100 pt-8">
          <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-6">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-50 text-slate-700 px-4 py-2 text-sm font-medium rounded-full border border-slate-100 hover:bg-slate-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="border-t border-slate-100 pt-8 mt-8">
            <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-6">
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="premium-text text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};