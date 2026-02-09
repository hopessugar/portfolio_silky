interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sivara Solutions helped us redesign our website and brand visuals with a very clear sense of direction. The final output felt polished and professional.",
    author: "Rohan Mehta",
    role: "Founder",
    company: "NovaCraft Studio"
  },
  {
    quote: "The design approach was thoughtful and well-structured. From branding to digital creatives, everything felt aligned with our business goals.",
    author: "Ananya Sharma",
    role: "Marketing Lead",
    company: "UrbanNest Co"
  },
  {
    quote: "What stood out was the attention to detail and consistency across designs. Communication was smooth and the process felt reliable.",
    author: "Kunal Verma",
    role: "Co-founder",
    company: "HexaWorks"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-50 section-padding" id="testimonials">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 fade-in-up">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl luxury-heading mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Testimonial card - minimal box with border */}
              <div className="bg-white border border-slate-200 p-8 rounded-none hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="space-y-6 flex-grow">
                  {/* Quote */}
                  <p className="text-lg md:text-xl premium-text leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-slate-300"></div>

                  {/* Author info */}
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
