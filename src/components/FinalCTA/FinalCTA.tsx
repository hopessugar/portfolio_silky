interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-8 fade-in-up">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl luxury-heading">
            Have a project in mind?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl premium-text max-w-2xl mx-auto leading-relaxed">
            We collaborate with a limited number of clients to ensure quality and dedicated attention to every project.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={onStartProject}
              className="btn-primary group touch-target-comfortable"
            >
              <span className="flex items-center justify-center">
                Start a Project
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
