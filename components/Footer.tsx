import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img src="hidaka1.jpeg" alt="HIDAKA COMMUNICATION Logo" className="h-12 w-auto mr-4" />
                            <span className="font-bold text-white text-lg">Hidaka Communication (M) Sdn Bhd</span>
                        </div>
                        <p className="max-w-md">
                            Your trusted partner in providing innovative and reliable energy solutions for homes and businesses.
                        </p>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-4 tracking-wider">Contact Us</h4>
                        <address className="not-italic space-y-3">
                            <div className="flex items-start">
                                <img src="https://api.iconify.design/lucide/map-pin.svg?color=%23d1d5db" alt="address" className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Lot 177-B, Tingkat 1, Kompleks Alor Setar, Lebuhraya Darulaman, 05100 Alor Setar, Kedah.</span>
                            </div>
                             <div className="flex items-center">
                                <img src="https://api.iconify.design/lucide/phone.svg?color=%23d1d5db" alt="phone" className="w-5 h-5 mr-3" />
                                <a href="tel:60194444969" className="hover:text-purple-400 transition-colors">019-444 4969</a>
                                &nbsp; &nbsp;  &nbsp; &nbsp;
                                <img src="https://api.iconify.design/lucide/phone.svg?color=%23d1d5db" alt="phone" className="w-5 h-5 mr-3" />
                                <a href="tel:60197521512" className="hover:text-purple-400 transition-colors">019-752 1512</a>

                            </div>
                            
                            <div className="flex items-center">
                                <p> Tel : </p>
                                <a href="tel:60197521512" className="hover:text-purple-400 transition-colors">019-752 1512 </a>
                                &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                                <p> Fax : </p>
                                <a href="tel:60197521512" className="hover:text-purple-400 transition-colors">019-752 1512</a>
                                
                            </div>

                            
                            <div className="flex items-center">
                                <img src="https://api.iconify.design/lucide/mail.svg?color=%23d1d5db" alt="email" className="w-5 h-5 mr-3" />
                                <a href="mailto:hidakacommunication09@gmail.com" className="hover:text-purple-400 transition-colors">hidakacommunication09@gmail.com</a>
                            </div>
                        </address>
                    </div>
                </div>
                 <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col items-center text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Hidaka Communication (M) Sdn Bhd. All Rights Reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">
                        Powered by MUHAMMAD QISTI AMALUDDIN BIN MOHD ROZAINI & AMIRUL BIN MUSA
                    </p>
                 </div>
            </div>
        </footer>
    );
};

export default Footer;