import type { Service } from '../../types';

interface AgencyServicesProps {
  services: Service[];
}

export const AgencyServices: React.FC<AgencyServicesProps> = ({ services }) => {
  return (
    <section className="bg-white section-padding" id="services">
      <div className="container-custom">
        {/* Section header - minimal and refined */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 fade-in-up">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl luxury-heading mb-6">
            Services Built For Growth
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
        </div>

        {/* Services grid - 2x2 layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service card - minimal and elegant */}
              <div className="space-y-6">
                {/* Service number - subtle */}
                <div className="text-sm text-slate-400 font-medium tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Service title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold luxury-heading leading-tight">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-base md:text-lg premium-text leading-relaxed">
                  {service.description}
                </p>

                {/* Divider line */}
                <div className="w-12 h-px bg-slate-300 group-hover:w-24 group-hover:bg-slate-900 transition-all duration-300"></div>

                {/* Service features - clean list */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm md:text-base text-slate-600"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
