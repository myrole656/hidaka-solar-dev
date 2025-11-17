import React from 'react';

// Card component updated for a background image theme
const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div 
        className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-fadeInUp border border-white/20"
    >
        <div className="flex items-center justify-center mx-auto h-20 w-20 rounded-full bg-purple-500/30 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const Benefits: React.FC = () => {
    // Updated data with new icon colors for the light theme
    const benefitsData = [
        {
            icon: <img src="https://api.iconify.design/lucide/dollar-sign.svg?color=%23ffffff" alt="Reduce Energy Bills" className="w-10 h-10" />,
            title: 'Reduce Energy Bills',
            description: 'Generate your own power and significantly lower or even eliminate your monthly electricity costs.'
        },
        {
            icon: <img src="https://api.iconify.design/lucide/trending-up.svg?color=%23ffffff" alt="Increase Home Value" className="w-10 h-10" />,
            title: 'Increase Home Value',
            description: 'Solar installations are a valuable upgrade that can increase your property\'s market value.'
        },
        {
            icon: <img src="https://api.iconify.design/lucide/leaf.svg?color=%23ffffff" alt="Lower Carbon Footprint" className="w-10 h-10" />,
            title: 'Lower Carbon Footprint',
            description: 'Reduce your reliance on fossil fuels and contribute to a cleaner, healthier environment.'
        },
        {
            icon: <img src="https://api.iconify.design/lucide/sun.svg?color=%23ffffff" alt="Energy Independence" className="w-10 h-10" />,
            title: 'Energy Independence',
            description: 'Gain independence from rising utility rates and power grid instability with your own energy source.'
        }
    ];

    return (
        <section 
            id="benefits" 
            className="relative py-24 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "/img/building1.jpeg')" }}
        >
             <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Why Go Solar?</h2>
                    <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">Discover the powerful advantages of switching to solar energy.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsData.map((benefit, index) => (
                        <BenefitCard 
                            key={index} 
                            {...benefit} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;