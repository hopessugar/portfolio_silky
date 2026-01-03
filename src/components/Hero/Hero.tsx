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
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left side - Text content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
                  Full-Stack Developer & Designer
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl luxury-heading mb-6 leading-[0.9]">
                {personal.name.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {word}
                    {index === 0 && <span className="text-slate-400">.</span>}
                  </span>
                ))}
              </h1>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600"></div>
              
              <p className="text-2xl md:text-3xl premium-text font-light leading-relaxed max-w-lg">
                {personal.tagline}
              </p>
              
              <p className="text-lg premium-text leading-relaxed max-w-xl opacity-80">
                {personal.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button 
                onClick={handleScrollToProjects}
                className="btn-primary group"
              >
                <span className="flex items-center">
                  Explore Work
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/91${personal.phone}?text=Hi%20Silky,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`, '_blank')}
                className="btn-secondary group"
              >
                <span className="flex items-center">
                  Let's Connect
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-12 space-y-4 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href={createEmailLink(personal.email || '', 'Portfolio Inquiry')}
                    className="premium-text hover:text-slate-900 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href={createPhoneLink(personal.phone)}
                    className="premium-text hover:text-slate-900 transition-colors"
                  >
                    {formatPhoneNumber(personal.phone)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end fade-in-right animation-delay-400">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-sm opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-20"></div>
              
              {/* Profile image container */}
              <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-sm overflow-hidden deep-shadow">
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
                      <div className="text-8xl mb-6 opacity-60">👨‍💻</div>
                      <div className="text-2xl font-medium luxury-heading">Silky Vyas</div>
                      <div className="text-sm opacity-80 mt-3 premium-text">
                        Professional Developer<br />
                        & Designer
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-effect rounded-full p-6 deep-shadow">
                  <div className="text-center">
                    <div className="text-2xl font-bold luxury-heading text-slate-900">5+</div>
                    <div className="text-xs uppercase tracking-wider text-slate-600 font-medium">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-in-up animation-delay-1000">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Scroll</div>
            <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};