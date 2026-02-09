import type { ProcessPhase } from '../../types';

interface ProcessProps {
  phases: ProcessPhase[];
}

export const Process: React.FC<ProcessProps> = ({ phases }) => {
  return (
    <section className="bg-slate-50 section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-in-up">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
            Our Process
          </span>
          <h2 className="mobile-heading-lg luxury-heading mb-6">
            A refined, professional approach
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
        </div>

        {/* Process phases - horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.number}
                className="relative fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Phase number - large and subtle */}
                <div className="text-8xl md:text-9xl font-bold luxury-heading text-slate-900 opacity-10 mb-4">
                  {phase.number}
                </div>
                
                {/* Phase content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold luxury-heading">
                    {phase.title}
                  </h3>
                  <p className="text-base md:text-lg premium-text leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Dot on connecting line - desktop only */}
                <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-slate-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
