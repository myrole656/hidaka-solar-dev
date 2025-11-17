import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/img/solar1.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-blue-900/60"></div>
      
      <div className="relative container mx-auto px-6 z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center pt-24 pb-12">
        
        <div className="flex flex-col items-center text-center">
           <img 
              src="/img/hidaka1.jpeg"
              alt="HIDAKA COMMUNICATION Logo"
              className="h-28 w-auto mb-6 animate-fade-in-down [filter:drop-shadow(0_0_5px_rgba(255,255,255,0.8))_drop-shadow(0_0_10px_rgba(255,255,255,0.6))]"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
              Let's Build Your Solar Future
            </h1>
            <p className="hidden md:block text-lg md:text-xl text-purple-300 max-w-xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Interested in our services? Fill out the form, and one of our experts will get in touch to discuss your project. Let's start the conversation.
            </p>
        </div>

        <div>
          {submitted ? (
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-green-400">Thank You!</h2>
                <p className="text-lg text-gray-200 mt-4">Your inquiry has been received. We will be in touch shortly.</p>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 transition-all duration-300" />
                      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 transition-all duration-300" />
                      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 transition-all duration-300" />
                      <textarea name="message" placeholder="Tell us about your project (optional)" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 transition-all duration-300"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300 mt-6 text-lg">
                      Submit Inquiry
                  </button>
                </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;