import type { ProcessPhase } from '../../types';

interface ProcessProps {
  phases: ProcessPhase[];
}

export const Process: React.FC<ProcessProps> = ({ phases }) => {
  return (
    <section className="bg-slate-50 section-padding" id="process">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-in-up">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
            Our Process
          </span>
          <h2 className="mobile-heading-lg luxury-heading mb-6">
            A Refined, Professional Approach
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
        </div>

        {/* Process phases - horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, positioned to align with dots */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-0.5 bg-slate-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.number}
                className="relative fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Dot on connecting line - desktop only, positioned above content */}
                <div className="hidden lg:flex absolute top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-slate-50 z-10"></div>
                
                {/* Phase number - positioned above the dot */}
                <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl font-bold luxury-heading text-slate-900">
                  {phase.number}
                </div>
                
                {/* Phase number for mobile - large and subtle */}
                <div className="lg:hidden text-8xl md:text-9xl font-bold luxury-heading text-slate-900 opacity-10 mb-4">
                  {phase.number}
                </div>
                
                {/* Phase content - positioned below the line */}
                <div className="space-y-4 lg:pt-[160px]">
                  <h3 className="text-2xl md:text-3xl font-semibold luxury-heading">
                    {phase.title}
                  </h3>
                  <p className="text-base md:text-lg premium-text leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
