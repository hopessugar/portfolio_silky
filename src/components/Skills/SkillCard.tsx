import type { Skill } from '../../types';
import { getSkillLevelColor, getSkillLevelDescription } from '../../utils';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group luxury-card p-8 hover:shadow-xl transition-all duration-700">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-500">
            {skill.icon}
          </div>
          <div>
            <h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors text-lg">
              {skill.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {getSkillLevelDescription(skill.level)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
            {skill.level}%
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-6 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-slate-700 to-slate-900 h-1.5 rounded-full transition-all duration-1000 ease-out transform origin-left"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      
      {skill.description && (
        <p className="premium-text text-sm leading-relaxed">
          {skill.description}
        </p>
      )}
    </div>
  );
};