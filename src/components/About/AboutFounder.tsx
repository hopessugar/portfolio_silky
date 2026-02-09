export const AboutFounder: React.FC = () => {
  return (
    <section className="bg-white section-padding" id="about">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20 fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
              Vision
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl luxury-heading mb-6">
              Founder's Vision
            </h2>
            <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
          </div>

          {/* Content - Editorial layout */}
          <div className="space-y-8 fade-in-up animation-delay-200">
            {/* Founder name */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold luxury-heading mb-2">
                Silky Vyas
              </h3>
              <p className="text-base md:text-lg text-slate-600">
                Founder & Creative Director
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>

            {/* Bio paragraphs - generous spacing */}
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <p className="text-lg md:text-xl premium-text leading-relaxed">
                At Sivara Solutions, the vision is simple to help small businesses grow, compete, and succeed in the digital world.
              </p>

              <p className="text-lg md:text-xl premium-text leading-relaxed">
                Founded with a passion for quality and innovation, Sivara Solutions exists to give brands a strong online presence that attracts attention, builds trust, and drives real growth. Every website, design, and digital solution is crafted with precision, strategy, and a deep understanding of what modern businesses need to stand out.
              </p>

              <p className="text-lg md:text-xl premium-text leading-relaxed">
                The goal is not just to deliver services, but to create meaningful digital experiences that elevate brands and expand their reach. From startups to growing enterprises, Sivara Solutions partners with clients to transform ideas into powerful online identities.
              </p>

              <p className="text-lg md:text-xl premium-text leading-relaxed">
                With a commitment to perfection, creativity, and results, the company continues to empower businesses to grow confidently in today’s competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
