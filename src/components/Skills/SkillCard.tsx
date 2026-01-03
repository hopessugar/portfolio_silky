import type { Skill } from '../../types';
import { getSkillLevelColor, getSkillLevelDescription } from '../../utils';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group luxury-card touch-target-comfortable transition-all duration-700">
      {/* Mobile-first: Increased padding for better touch targets */}
      <div className="p-6 md:p-8">
        {/* Mobile-optimized header layout */}
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className="flex items-center flex-1 min-w-0">
            <div className="text-2xl md:text-3xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
              {skill.icon}
            </div>
            <div className="min-w-0 flex-1">
              {/* Mobile-first: Responsive text sizing */}
              <h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors text-base md:text-lg leading-tight">
                {skill.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                {getSkillLevelDescription(skill.level)}
              </p>
            </div>
          </div>
          
          {/* Mobile-optimized skill level display */}
          <div className="text-right flex-shrink-0 ml-2">
            <div className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
              {skill.level}%
            </div>
          </div>
        </div>
        
        {/* Mobile-optimized progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4 md:mb-6 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-slate-700 to-slate-900 h-1.5 rounded-full transition-all duration-1000 ease-out transform origin-left"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        
        {/* Mobile-first: Optimized description */}
        {skill.description && (
          <p className="premium-text text-sm leading-relaxed">
            {skill.description}
          </p>
        )}
      </div>
    </div>
  );
};