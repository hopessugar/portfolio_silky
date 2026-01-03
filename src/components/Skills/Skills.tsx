import type { SkillsProps } from '../../types';
import { SkillCard } from './SkillCard';
import { ServiceCard } from './ServiceCard';
import { getSkillsGroupedByCategory } from '../../utils';

export const Skills: React.FC<SkillsProps> = ({ skills, services }) => {
  const groupedSkills = getSkillsGroupedByCategory(skills);

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    design: 'Design & Creative',
    automation: 'AI & Automation',
    seo: 'SEO & Optimization',
    tools: 'Tools & Technologies'
  };

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container-custom">
        {/* Skills Section */}
        <div className="mb-24 md:mb-40">
          {/* Mobile-first section header */}
          <div className="text-center mb-16 md:mb-24 fade-in-up">
            <div className="inline-block mb-4 md:mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
                Expertise
              </span>
            </div>
            <h2 className="mobile-heading-lg luxury-heading mb-6 md:mb-8">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-6 md:mb-8"></div>
            <p className="mobile-text-lg premium-text max-w-3xl mx-auto leading-relaxed px-4">
              A comprehensive expertise spanning cutting-edge web technologies, sophisticated design, 
              and intelligent automation solutions.
            </p>
          </div>

          {/* Mobile-first skills by category */}
          <div className="mobile-section-gap">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="fade-in-up" style={{ animationDelay: `${categoryIndex * 200 + 400}ms` }}>
                  {/* Mobile-optimized category header */}
                  <div className="text-center mb-8 md:mb-12">
                    <h3 className="text-xl md:text-2xl luxury-heading text-slate-800 mb-3 md:mb-4">
                      {categoryTitles[category as keyof typeof categoryTitles]}
                    </h3>
                    <div className="w-12 md:w-16 h-px bg-slate-300 mx-auto"></div>
                  </div>
                  
                  {/* Mobile-first grid: single column on mobile, responsive scaling */}
                  <div className="mobile-grid-4 mobile-card-gap">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="fade-in-up"
                        style={{ animationDelay: `${categoryIndex * 200 + index * 100 + 600}ms` }}
                      >
                        <SkillCard skill={skill} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile-first Services Section */}
        <div className="fade-in-up animation-delay-800">
          {/* Mobile-optimized services header */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block mb-4 md:mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
                What I Offer
              </span>
            </div>
            <h2 className="mobile-heading-lg luxury-heading mb-6 md:mb-8">
              Premium <span className="text-gradient">Services</span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-6 md:mb-8"></div>
            <p className="mobile-text-lg premium-text max-w-3xl mx-auto leading-relaxed px-4">
              End-to-end solutions combining technical excellence with creative design 
              to deliver exceptional digital experiences that drive business growth.
            </p>
          </div>

          {/* Mobile-first services grid */}
          <div className="mobile-grid-3 mobile-card-gap">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 150 + 1000}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};