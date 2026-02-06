import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Building, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-20 mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-secondary-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-900 opacity-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">Contact</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Contact Us
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                        Get in touch with Aksisfire for inquiries, support, and collaboration.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}

                    {/* Address */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">Our Headquarter</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Deri OSB, Kazlıçeşme Cd. No:14/A,<br />
                            34953 Tuzla / İstanbul<br />
                            TÜRKİYE
                        </p>
                    </div>

                    {/* Phone & Email */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-400" />
                                <a href="tel:+902163068216" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                                    +90 (216) 306 82 16
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-400" />
                                <a href="mailto:aksisfire@aksisfire.com.tr" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                                    aksisfire@aksisfire.com.tr
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                            <Building size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">Company Details</h3>
                        <p className="text-gray-700 font-semibold mb-2">
                            Aksis Yangın Söndürme Sistemleri A.Ş.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                            <Clock size={16} />
                            <span>Mon - Fri: 08:00 - 17:00</span>
                        </div>
                    </div>

                </div>

                {/* Map Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[450px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.689679647249!2d29.43187637654761!3d40.87979997136894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb207186105787%3A0xc33895eaf888147d!2sAksis%20Yang%C4%B1n%20S%C3%B6nd%C3%BCrme%20Sistemleri!5e0!3m2!1sen!2str!4v1709470000000!5m2!1sen!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Aksisfire Location"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contact;
