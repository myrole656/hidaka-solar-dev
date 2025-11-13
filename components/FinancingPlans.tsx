import React from 'react';

interface FinancingPlan {
  title: string;
  description: string;
  image: string;
}

const financingPlans: FinancingPlan[] = [
  {
    title: 'Outright Purchase',
    description: 'Pay in full and enjoy the fastest return on investment with maximum lifetime savings.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Installment Plan Programme (IPP)',
    description: 'Spread the cost over monthly payments with flexible tenure options tailored for homeowners.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Personal Financing',
    description: 'Leverage personal financing solutions to keep your cash flow healthy while going solar.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
];

const FinancingPlans: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold uppercase tracking-wide">Financing Plans</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">We customise your agreement based on your needs.</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {financingPlans.map((plan) => (
            <article
              key={plan.title}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="mt-3 text-sm text-gray-100/90 leading-relaxed">{plan.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancingPlans;
