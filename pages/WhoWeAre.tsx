import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Anchor, ShieldCheck, Users, PenTool } from 'lucide-react';

const WhoWeAre: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-24 mb-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/who-we-are-1.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-300">About Us</span>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">Who We Are</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Who We Are
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">

                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 relative">
                            Experts in Marine Fire Protection
                            <span className="absolute -left-4 top-1 w-1 h-8 bg-primary-600 rounded-full"></span>
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="lead text-xl text-secondary-800 font-medium mb-6">
                                Aksisfire offers a wide range of marine-related fire protection systems, delivering excellence since 1994.
                            </p>
                            <p className="mb-6">
                                Aksis Yangın Söndürme Sistemleri A.S (AKSISFIRE) is formed by engineers who have extensive proven experience since 1994 in fixed based internal and external fire protection systems in the Marine and Offshore Industries.
                            </p>
                            <p>
                                Our expertise covers a vast array of vessels including Oil/Chemical Tankers, Cargo Vessels, Offshore Vessels, Fishing Vessels, Fi-Fi Tugs, and Cruise Vessels.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-3"></div>
                        <img
                            src="/who-we-are-1.jpg"
                            alt="Aksisfire Workshop and Cylinders"
                            className="relative rounded-xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                </div>

                {/* Scope of Work Section */}
                <div className="bg-secondary-900 rounded-3xl p-12 text-white mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Anchor size={300} />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                                <PenTool className="text-primary-500" />
                                Scope of Work
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Within these fields, Aksisfire's scope of work covers the system design, equipment supply, field support, and system start-up for new vessels or conversions according to specifications and Marine rules.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                                <Users className="text-primary-500" />
                                Technical Expertise
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Aksisfire has a multi-disciplined technical staff fully experienced in shipbuilding and fire protection system design and production techniques. Full use is made of the latest approved design and calculation programs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform -rotate-2"></div>
                        <img
                            src="/who-we-are-2.jpg"
                            alt="Aksisfire Office and Storage"
                            className="relative rounded-xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
                            <ShieldCheck className="text-primary-600" size={32} />
                            Quality & Compliance
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We are dedicated to ensuring the highest standards of safety and compliance. Our systems are designed to meet rigorous marine regulations, ensuring the safety of crew, cargo, and vessels.
                        </p>
                        <Link to="/about/certificates" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group">
                            View Our Certificates
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhoWeAre;
