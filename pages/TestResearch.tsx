import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FlaskConical, GraduationCap } from 'lucide-react';

const TestResearch: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/fire-test-room-new.png"
                        alt="Test & Research"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">Test & Research</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Test & Research
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                        Advancing maritime safety through authorized training and full-scale fire testing facilities.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 space-y-24">

                {/* Academy Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 group">
                    <div className="lg:w-1/2 relative">
                        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                            <img
                                src="/academi.jpg"
                                alt="Aksisfire Academy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-secondary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-50/50 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-50/50 rounded-full blur-2xl -z-10"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-wider mb-2">
                            <GraduationCap size={20} />
                            <span>Training & Education</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                            Aksisfire Academy
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="font-medium text-secondary-800 mb-4">
                                Join us to enhance your knowledge and skills in fire safety.
                            </p>
                            <p>
                                At aksisfire Academy, we provide professional training on MARINE FIRE PROTECTION and DETECTION systems
                                based on aksisfire's own design and production. Our training courses cover the latest technologies,
                                class rules, and hands-on applications to ensure the highest level of expertise.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fire Test Room Section (Reversed Layout) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
                    <div className="lg:w-1/2 relative">
                        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                            <img
                                src="/fire-test-room-new.png"
                                alt="Fire Test Room"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-secondary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-50/50 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-50/50 rounded-full blur-2xl -z-10"></div>
                    </div>

                    <div className="lg:w-1/2 text-right lg:text-left">
                        <div className="flex items-center justify-end lg:justify-start gap-2 text-primary-600 font-bold uppercase tracking-wider mb-2">
                            <FlaskConical size={20} />
                            <span>R&D Facility</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                            Fire Test Room
                        </h2>
                        <div className="prose prose-lg text-gray-600 flex flex-col items-end lg:items-start">
                            <p className="mb-4">
                                We have our own fire test room, built to fullfill <span className="font-semibold text-secondary-900">IMO/MSC 848</span> rule that allow us to make
                                full scale testing of firefighting systems and components.
                            </p>
                            <p>
                                The real fire tests are very critical to make sure ship/crew safety on board of ships. In that respect
                                the fire test room allows us to carry out comprehensive fire tests under the supervision of marine
                                classification societies to provide system and/or component certifications.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestResearch;
