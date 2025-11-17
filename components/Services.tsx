import React, { useState, useEffect, useRef } from 'react';

const ServiceFeature: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}> = ({ icon, title, description, imageUrl, imageAlt, reverse = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const initialTranslate = reverse ? 'translate-x-10' : '-translate-x-10';

  return (
    <div
      ref={domRef}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`md:w-1/2 transform hover:scale-105 transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${initialTranslate}`}`}>
        <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden">
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className={`md:w-1/2 text-center md:text-left transition-all duration-[2000ms] ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${initialTranslate}`}`}>
         <div className="flex items-center gap-x-4 mb-4 justify-center md:justify-start">
           <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-purple-100">
             {icon}
           </div>
           <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
         </div>
         <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};


const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <img src="https://api.iconify.design/lucide/home.svg?color=%238b5cf6" alt="Residential Icon" className="w-8 h-8" />,
      title: 'Residential Solar',
      description: 'Custom solar panel systems for your home to reduce electricity bills and increase property value.',
      imageUrl: "/img/solar5.jpeg",
      imageAlt: "Residential home with solar panels on the roof"
    },
    {
      icon: <img src="https://api.iconify.design/lucide/building-2.svg?color=%238b5cf6" alt="Commercial Icon" className="w-8 h-8" />,
      title: 'Commercial Solar',
      description: 'Scalable solar solutions for businesses of all sizes, helping you cut operational costs and meet sustainability goals.',
      imageUrl: "/img/solar6.png",
      imageAlt: "Rooftop of a commercial building with a large solar panel installation"
    },
    {
      icon: <img src="https://api.iconify.design/lucide/battery-charging.svg?color=%238b5cf6" alt="Battery Icon" className="w-8 h-8" />,
      title: 'Battery Storage',
      description: 'Store excess solar energy for use during power outages or at night, ensuring an uninterrupted power supply.',
      imageUrl: "/img/solar2.jpeg",
      imageAlt: "Sleek, modern home battery storage unit mounted on a wall"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Solar Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Comprehensive solutions tailored to your energy needs.</p>
        </div>
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <ServiceFeature 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;