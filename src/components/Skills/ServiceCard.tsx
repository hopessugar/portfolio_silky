import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="luxury-card p-10 group hover:shadow-2xl transition-all duration-700 h-full">
      <div className="text-center mb-8">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        <h3 className="text-2xl luxury-heading group-hover:text-slate-700 transition-colors mb-4">
          {service.title}
        </h3>
        <p className="premium-text leading-relaxed text-lg">
          {service.description}
        </p>
      </div>
      
      <div className="border-t border-slate-100 pt-8">
        <h4 className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium mb-6">
          What's Included
        </h4>
        <div className="space-y-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start group/item">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:bg-slate-600 transition-colors"></div>
              <span className="premium-text text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none"></div>
    </div>
  );
};