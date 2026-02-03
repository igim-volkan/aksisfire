import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ClipboardCheck, Cpu, Flame, Droplets, Settings, Package, ArrowDown } from 'lucide-react';

const PROCESS_STEPS = [
    {
        id: 'reception',
        title: 'Goods Reception & Control',
        description: 'Every piece of equipment is thoroughly inspected and recorded in our ERP system before storage. We prioritize full traceability and follow a first-in, first-out inventory method to optimize efficiency and traceability.',
        image: '/what-we-do-reception.jpg',
        icon: ClipboardCheck,
        orientation: 'horizontal'
    },
    {
        id: 'control-system',
        title: 'Control System Production',
        description: 'We construct systems with high-quality components and use PLC programming. Extensive functionality tests are carried out, and systems are checked before delivery to the customer.',
        image: '/what-we-do-control.jpg',
        icon: Cpu,
        orientation: 'vertical'
    },
    {
        id: 'welding',
        title: 'Welding',
        description: 'Products are welded by certified welders according to the technical drawings, WPS and WPQR. Welds are checked by non-destructive tests and hydrostatic tests.',
        image: '/what-we-do-welding.jpg',
        icon: Flame,
        orientation: 'vertical'
    },
    {
        id: 'filling',
        title: 'Filling',
        description: 'Our filling facility is capable of filling extinguishing agents such as FK 5-1-12. The amount of agent determined in accordance with hydraulic calculations is filled into the cylinders by qualified personnel.',
        image: '/what-we-do-filling.jpg',
        icon: Droplets,
        orientation: 'vertical'
    },
    {
        id: 'machining',
        title: 'Machining',
        description: 'Our factory has a dedicated production hall equipped with high-tech CNC machines and comprehensive tools. We manufacture the system equipment with high precision.',
        image: '/what-we-do-machining.jpg',
        icon: Settings,
        orientation: 'vertical'
    },
    {
        id: 'packing',
        title: 'Packing',
        description: 'In our warehouse, every finished product is carefully packaged for worldwide shipment. Using robust wooden crates built for safe transport, we ensure that all equipment arrives at its global destinations securely and in perfect condition.',
        image: '/what-we-do-packing.jpg',
        icon: Package,
        orientation: 'horizontal'
    }
];

const WhatWeDo: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-24 mb-16 overflow-hidden">
                {/* Background Image - Using Machining image as hero background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/what-we-do-machining.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-300">About Us</span>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">What We Do</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        What We Do
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">Operational Excellence</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        From raw material reception to final packaging, stringent quality controls and advanced manufacturing processes ensure the reliability of every Aksisfire system.
                    </p>
                </div>

                <div className="space-y-20 relative">
                    {/* Vertical Connecting Line (Hidden on mobile) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

                    {PROCESS_STEPS.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = step.icon;
                        // orientation is implicitly part of step now
                        // const orientation = (step as any).orientation || 'horizontal';
                        // const maxWidthClass = orientation === 'vertical' ? 'max-w-[60%] lg:max-w-xs' : 'max-w-full lg:max-w-xl';

                        return (
                            <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative z-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                {/* Image / Visual Side */}
                                <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-end lg:pr-12' : 'lg:justify-start lg:pl-12'} justify-center`}>
                                    {step.image ? (
                                        <div className="relative group w-fit">
                                            <div className={`absolute -inset-4 bg-gray-100 rounded-2xl transform transition-transform duration-500 group-hover:rotate-0 ${isEven ? '-rotate-2' : 'rotate-2'}`}></div>
                                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                                />
                                            </div>
                                            {/* Number Badge */}
                                            <div className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold font-display shadow-lg ring-4 ring-white z-20`}>
                                                0{index + 1}
                                            </div>
                                        </div>
                                    ) : (
                                        // Fallback layout
                                        <div className="bg-secondary-900 rounded-2xl p-12 h-[350px] flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-xl">
                                            <div className="absolute inset-0 opacity-10">
                                                <Flame size={400} className="text-gray-400 transform -rotate-12 translate-x-1/4 translate-y-1/4" />
                                            </div>
                                            <div className="relative z-10">
                                                <Flame size={80} className="text-primary-500 mb-6 mx-auto animate-pulse" />
                                                <h3 className="text-3xl font-bold font-display uppercase tracking-widest text-primary-500">Certified Welding</h3>
                                            </div>
                                            {/* Number Badge */}
                                            <div className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold font-display shadow-lg ring-4 ring-white z-20`}>
                                                0{index + 1}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                                    <div className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative ${isEven ? 'text-left' : 'text-left lg:text-right'}`}>

                                        {/* Mobile Number Badge (visible only on small screens) */}
                                        <div className="lg:hidden absolute -top-4 left-6 bg-primary-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                                            STEP 0{index + 1}
                                        </div>

                                        <div className={`flex items-center gap-4 mb-4 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-secondary-900">{step.title}</h3>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;
