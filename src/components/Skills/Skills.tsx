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
        <div className="mb-40">
          <div className="text-center mb-24 fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
                Expertise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl luxury-heading mb-8">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-8"></div>
            <p className="text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              A comprehensive expertise spanning cutting-edge web technologies, sophisticated design, 
              and intelligent automation solutions.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-20">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="fade-in-up" style={{ animationDelay: `${categoryIndex * 200 + 400}ms` }}>
                  <div className="text-center mb-12">
                    <h3 className="text-2xl luxury-heading text-slate-800 mb-4">
                      {categoryTitles[category as keyof typeof categoryTitles]}
                    </h3>
                    <div className="w-16 h-px bg-slate-300 mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        {/* Services Section */}
        <div className="fade-in-up animation-delay-800">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
                What I Offer
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl luxury-heading mb-8">
              Premium <span className="text-gradient">Services</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-8"></div>
            <p className="text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions combining technical excellence with creative design 
              to deliver exceptional digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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