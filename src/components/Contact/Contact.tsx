import type { ContactProps } from '../../types';
import { ContactForm } from './ContactForm';
import { formatPhoneNumber, createPhoneLink, createEmailLink } from '../../utils';

export const Contact: React.FC<ContactProps> = ({ personal, onSubmit }) => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container-custom">
        {/* Mobile-first section header */}
        <div className="text-center mb-16 md:mb-24 fade-in-up">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="mobile-heading-lg luxury-heading mb-6 md:mb-8">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto mb-6 md:mb-8"></div>
          <p className="mobile-text-lg premium-text max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? I'm here to help you create amazing digital experiences 
            that drive results and exceed expectations.
          </p>
        </div>

        {/* Mobile-first: Stack contact info above form on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left animation-delay-400 w-full max-w-lg mx-auto lg:mx-0">
            <div className="luxury-card p-10">
              <h3 className="text-3xl luxury-heading mb-6 text-center">Let's Connect</h3>
              <p className="premium-text text-lg leading-relaxed mb-10 text-center">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a complete website, UI/UX design, or technical consultation, 
                I'm here to help turn your vision into reality.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-6 p-6 bg-slate-50 rounded-none hover:bg-slate-100 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Phone</h4>
                    <a 
                      href={createPhoneLink(personal.phone)}
                      className="premium-text hover:text-slate-900 transition-colors"
                    >
                      {formatPhoneNumber(personal.phone)}
                    </a>
                  </div>
                </div>

                {/* Email */}
                {personal.email && (
                  <div className="flex items-center space-x-6 p-6 bg-slate-50 rounded-none hover:bg-slate-100 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium mb-1">Email</h4>
                      <a 
                        href={createEmailLink(personal.email, 'Portfolio Inquiry')}
                        className="premium-text hover:text-slate-900 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                {personal.location && (
                  <div className="flex items-center space-x-6 p-6 bg-slate-50 rounded-none">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium mb-1">Location</h4>
                      <p className="premium-text">{personal.location}</p>
                    </div>
                  </div>
                )}

                {/* Social Links */}
                {personal.socialLinks && personal.socialLinks.length > 0 && (
                  <div className="p-6 bg-slate-50 rounded-none">
                    <h4 className="text-slate-900 font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4">
                      {personal.socialLinks.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="premium-text hover:text-slate-900 transition-colors font-medium border-b border-slate-200 hover:border-slate-900 pb-1"
                          aria-label={link.label}
                        >
                          {link.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-none border-l-4 border-slate-900">
                <h4 className="text-slate-900 font-medium mb-2 flex items-center">
                  <span className="mr-2">⚡</span>
                  Quick Response
                </h4>
                <p className="premium-text text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to call me directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right animation-delay-600 w-full max-w-lg mx-auto lg:mx-0">
            <div className="luxury-card p-10 deep-shadow">
              <h3 className="text-3xl luxury-heading mb-8 text-center">Send Me a Message</h3>
              <ContactForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-24 fade-in-up animation-delay-800">
          <div className="luxury-card p-16 max-w-4xl mx-auto">
            <h3 className="text-4xl luxury-heading mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="premium-text text-xl mb-10 max-w-2xl mx-auto">
              Let's schedule a free consultation to discuss your needs and how I can help 
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`https://wa.me/91${personal.phone}?text=Hi%20Silky,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center group w-full sm:w-auto"
              >
                <span className="mr-3 text-lg">💬</span>
                <span>WhatsApp Me</span>
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a
                href={createPhoneLink(personal.phone)}
                className="btn-secondary group w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center">
                  Call Now
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};