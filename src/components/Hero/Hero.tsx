import type { HeroProps } from '../../types';
import { formatPhoneNumber, createPhoneLink, createEmailLink } from '../../utils';

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle background pattern - reduced on mobile for performance */}
      <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container-custom section-padding relative">
        {/* Mobile-first: Single column layout, stacked content */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          
          {/* Mobile-first: Profile image comes first on mobile for immediate impact */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end fade-in-right animation-delay-400">
            <div className="relative">
              {/* Mobile-optimized decorative elements */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full md:rounded-sm opacity-20 blur-xl"></div>
              <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-30"></div>
              <div className="hidden md:block absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-20"></div>
              
              {/* Mobile-first profile image: smaller and circular on mobile */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-full md:rounded-sm overflow-hidden deep-shadow">
                  <img
                    src="/images/my_img.jpeg"
                    alt={`${personal.name} - Professional Photo`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      console.log('Image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 absolute inset-0 -z-10">
                    <div className="text-center">
                      <div className="text-4xl md:text-8xl mb-3 md:mb-6 opacity-60">👨‍💻</div>
                      <div className="text-lg md:text-2xl font-medium luxury-heading">Silky Vyas</div>
                      <div className="text-xs md:text-sm opacity-80 mt-2 md:mt-3 premium-text">
                        Professional Developer<br />
                        & Designer
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile-optimized floating badge */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 glass-effect rounded-full p-3 md:p-6 deep-shadow">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold luxury-heading text-slate-900">5+</div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wider text-slate-600 font-medium">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-first: Text content with optimized typography */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 fade-in-left text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
                  Full-Stack Developer & Designer
                </span>
              </div>
              
              {/* Mobile-first typography: Responsive scaling */}
              <h1 className="mobile-heading-xl luxury-heading mb-4 md:mb-6 leading-[0.9]">
                {personal.name.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {word}
                    {index === 0 && <span className="text-slate-400">.</span>}
                  </span>
                ))}
              </h1>
              
              <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto lg:mx-0"></div>
              
              {/* Mobile-optimized tagline */}
              <p className="text-xl md:text-2xl lg:text-3xl premium-text font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                {personal.tagline}
              </p>
              
              {/* Mobile-optimized bio */}
              <p className="text-base md:text-lg premium-text leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80">
                {personal.bio}
              </p>
            </div>

            {/* Mobile-first CTA Buttons with proper touch targets */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8 justify-center lg:justify-start">
              <button 
                onClick={handleScrollToProjects}
                className="btn-primary group touch-target-comfortable"
              >
                <span className="flex items-center justify-center">
                  Explore Work
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/91${personal.phone}?text=Hi%20Silky,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`, '_blank')}
                className="btn-secondary group touch-target-comfortable"
              >
                <span className="flex items-center justify-center">
                  Let's Connect
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile-optimized contact info with touch targets */}
            <div className="pt-8 md:pt-12 space-y-4 border-t border-slate-200">
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 text-sm">
                <a 
                  href={createEmailLink(personal.email || '', 'Portfolio Inquiry')}
                  className="flex items-center gap-3 group touch-target p-2 rounded-lg hover:bg-slate-50 transition-colors justify-center sm:justify-start"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="premium-text group-hover:text-slate-900 transition-colors">
                    {personal.email}
                  </span>
                </a>
                <a 
                  href={createPhoneLink(personal.phone)}
                  className="flex items-center gap-3 group touch-target p-2 rounded-lg hover:bg-slate-50 transition-colors justify-center sm:justify-start"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="premium-text group-hover:text-slate-900 transition-colors">
                    {formatPhoneNumber(personal.phone)}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-optimized scroll indicator */}
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