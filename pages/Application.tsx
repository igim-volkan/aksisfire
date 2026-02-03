import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Anchor } from 'lucide-react';

const Application: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/specialized-vessels.jpg"
                        alt="Maritime Applications"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">Applications</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Maritime Applications
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                        Protecting vital maritime assets with specialized fire suppression solutions for every vessel type.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 space-y-24">

                {/* Specialized Vessels Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 group">
                    <div className="lg:w-1/2 relative">
                        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                            <img
                                src="/specialized-vessels.jpg"
                                alt="Specialized Vessels"
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
                            <Anchor size={20} />
                            <span>Industry Specific</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                            Specialized Vessels
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                Specialized vessels have crucial roles in various industries like dredgers for maintaining waterways,
                                supply vessels for delivering goods and equipment to offshore platforms, power ships that function as
                                floating power plants, pilot boats that assist with maritime navigation and accommodation barges that
                                provide living quarters for offshore workers.
                            </p>
                            <p className="mt-4 border-l-4 border-primary-600 pl-4 italic text-secondary-800 font-medium">
                                Aksisfire fixed fire extinguishing systems are designed to protect vessels in various functions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Commercial Vessels Section (Reversed Layout) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
                    <div className="lg:w-1/2 relative">
                        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                            <img
                                src="/commercial-vessels.jpg"
                                alt="Commercial Vessels"
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
                            <Anchor size={20} />
                            <span>Global Trade</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                            Commercial Vessels
                        </h2>
                        <div className="prose prose-lg text-gray-600 flex flex-col items-end lg:items-start">
                            <p>
                                Commercial vessels are very important to the global economy, transporting energy, raw materials,
                                food, consumer goods and passengers around the world.
                            </p>
                            <p className="mt-4 border-r-4 lg:border-l-4 lg:border-r-0 border-primary-600 pr-4 lg:pl-4 lg:pr-0 italic text-secondary-800 font-medium">
                                Aksisfire fixed firefighting systems are designed to ensure that this transport can be carried out safely.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Application;
