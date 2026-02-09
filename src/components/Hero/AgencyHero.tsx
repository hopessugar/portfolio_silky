import type { AgencyInfo } from '../../types';
import { formatPhoneNumber, createPhoneLink, createEmailLink } from '../../utils';

interface AgencyHeroProps {
  agency: AgencyInfo;
}

export const AgencyHero: React.FC<AgencyHeroProps> = ({ agency }) => {
  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container-custom section-padding relative w-full">
        {/* Centered content with editorial layout */}
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12 fade-in-up">
          
          {/* Brand Logo and Name - Hero Treatment */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8 fade-in-up animation-delay-100">
            {/* Logo - Clean and elegant */}
            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 relative opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img 
                src="/images/brand/logo.jpeg"
                alt={`${agency.name} Logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Logo loaded successfully');
                }}
              />
            </div>
            
            {/* Brand Name - LARGE and dominant */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold luxury-heading tracking-tight leading-none">
              {agency.name}
            </h1>
            
            {/* Tagline - smaller and refined */}
            <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light tracking-wide max-w-2xl leading-relaxed">
              {agency.tagline}
            </p>
          </div>
          
          {/* Divider line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-900 to-transparent mx-auto fade-in-up animation-delay-400"></div>
          
          {/* Main headline with editorial typography */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl luxury-heading leading-tight fade-in-up animation-delay-600">
            {agency.heroHeadline.split(' ').map((word, index, array) => {
              // Group words into lines for better control
              const wordsPerLine = window.innerWidth < 768 ? 4 : 6;
              const lineBreak = (index + 1) % wordsPerLine === 0 && index < array.length - 1;
              
              return (
                <span key={index}>
                  {word}
                  {lineBreak ? <br /> : ' '}
                </span>
              );
            })}
          </h2>
          
          {/* Subtext with generous spacing */}
          <p className="text-lg md:text-xl lg:text-2xl premium-text font-light leading-relaxed max-w-4xl mx-auto fade-in-up animation-delay-800">
            {agency.heroSubtext}
          </p>
          
          {/* CTA Button */}
          <div className="pt-8 md:pt-12 fade-in-up animation-delay-1000">
            <button 
              onClick={handleStartProject}
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

          {/* Contact info - minimal and refined */}
          <div className="pt-12 md:pt-16 space-y-4 border-t border-slate-200 max-w-2xl mx-auto fade-in-up animation-delay-1000">
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <a 
                href={createEmailLink(agency.email || '', 'Project Inquiry')}
                className="flex items-center gap-2 group premium-text hover:text-slate-900 transition-colors"
              >
                <span className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-slate-900 transition-colors"></span>
                {agency.email}
              </a>
              <a 
                href={createPhoneLink(agency.phone)}
                className="flex items-center gap-2 group premium-text hover:text-slate-900 transition-colors"
              >
                <span className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-slate-900 transition-colors"></span>
                {formatPhoneNumber(agency.phone)}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-in-up animation-delay-1000">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Scroll</div>
            <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
