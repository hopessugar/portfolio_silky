import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="luxury-card group transition-all duration-700 h-full touch-target-comfortable">
      {/* Mobile-first: Responsive padding */}
      <div className="p-6 md:p-8 lg:p-10">
        {/* Mobile-optimized header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>
          {/* Mobile-first: Responsive heading */}
          <h3 className="text-xl md:text-2xl luxury-heading group-hover:text-slate-700 transition-colors mb-3 md:mb-4">
            {service.title}
          </h3>
          {/* Mobile-optimized description */}
          <p className="premium-text leading-relaxed text-base md:text-lg">
            {service.description}
          </p>
        </div>
        
        {/* Mobile-first features section */}
        <div className="border-t border-slate-100 pt-6 md:pt-8">
          <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-4 md:mb-6">
            What's Included
          </h4>
          {/* Mobile-optimized features list */}
          <div className="space-y-3 md:space-y-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start group/item">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 md:mt-2.5 mr-3 md:mr-4 flex-shrink-0 group-hover/item:bg-slate-600 transition-colors"></div>
                <span className="premium-text text-sm leading-relaxed flex-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-optimized hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none"></div>
      </div>
    </div>
  );
};