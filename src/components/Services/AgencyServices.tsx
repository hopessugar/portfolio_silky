import type { Service } from '../../types';

interface AgencyServicesProps {
  services: Service[];
}

export const AgencyServices: React.FC<AgencyServicesProps> = ({ services }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-in-up">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
            What We Do
          </span>
          <h2 className="mobile-heading-lg luxury-heading mb-6">
            Services built for growth
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl premium-text leading-relaxed">
            High-value offerings focused on outcomes, not tasks. Every solution is crafted to drive measurable business results.
          </p>
        </div>

        {/* Services grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="luxury-card p-8 md:p-12 space-y-6 fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service title */}
              <h3 className="text-3xl md:text-4xl luxury-heading">
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="text-lg md:text-xl premium-text leading-relaxed">
                {service.description}
              </p>
              
              {/* Features list - minimal styling */}
              <ul className="space-y-3 pt-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base premium-text">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
