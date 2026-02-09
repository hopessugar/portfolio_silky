import { useState, useEffect } from 'react';
import type { AgencyInfo } from '../../types';

interface HeaderProps {
  agency: AgencyInfo;
}

export const Header: React.FC<HeaderProps> = ({ agency }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Work', id: 'work' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: "Founder's Vision", id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand Name - Left aligned */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group"
          >
            <span className="text-xl md:text-2xl font-bold luxury-heading hover:text-slate-700 transition-colors">
              {agency.name}
            </span>
          </button>

          {/* Desktop Navigation - Right aligned with more space */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary-sm ml-4"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-base text-slate-600 hover:text-slate-900 transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
