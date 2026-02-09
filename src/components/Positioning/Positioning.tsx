import type { PositioningPrinciple } from '../../types';

interface PositioningProps {
  principles: PositioningPrinciple[];
}

export const Positioning: React.FC<PositioningProps> = ({ principles }) => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left column: Section label and headline */}
          <div className="space-y-6 fade-in-left">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
                Our Approach
              </span>
            </div>
            
            <h2 className="mobile-heading-lg luxury-heading leading-tight">
              Strategy Before
              <br />
              Execution
            </h2>
            
            <div className="w-16 h-0.5 bg-slate-900"></div>
          </div>

          {/* Right column: Principles */}
          <div className="space-y-12 fade-in-right">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="border-l-2 border-slate-900 pl-8 fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 luxury-heading">
                  {principle.title}
                </h3>
                <p className="text-lg premium-text leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
