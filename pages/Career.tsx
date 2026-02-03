import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, BrainCircuit, Languages, Target, PartyPopper, ArrowRight } from 'lucide-react';

const STEPS = [
    {
        id: 'step1',
        title: 'Apply Online',
        description: 'Apply online for the job',
        icon: FileText,
        color: 'bg-blue-500'
    },
    {
        id: 'step2',
        title: 'Skill Test',
        description: 'Take the skill test to show us your general understanding',
        icon: BrainCircuit,
        color: 'bg-indigo-500'
    },
    {
        id: 'step3',
        title: 'Language Test',
        description: 'Take the language test',
        icon: Languages,
        color: 'bg-purple-500'
    },
    {
        id: 'step4',
        title: 'Competency Test',
        description: 'Take the competency test for your job',
        icon: Target,
        color: 'bg-pink-500'
    },
    {
        id: 'final',
        title: 'Welcome!',
        description: 'Welcome to the Team!',
        icon: PartyPopper,
        color: 'bg-primary-600'
    }
];

const Career: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-24 mb-16 overflow-hidden">
                {/* Background Image - Office/People theme */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                        alt="Career Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-300">About Us</span>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">Career</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Career
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">Career Opportunities</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We are looking for talented people to help us create the future of fire systems technologies. If you are dynamic, creative, and ready to make a difference, check out our open positions and join our team.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line (Horizontal on Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10">
                        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-primary-600 w-full opacity-30"></div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className="relative group">
                                    {/* Mobile Connecting Line (Vertical) */}
                                    {index !== STEPS.length - 1 && (
                                        <div className="lg:hidden absolute left-8 top-16 bottom-[-32px] w-1 bg-gray-100 z-0"></div>
                                    )}

                                    <div className="flex lg:flex-col items-center gap-6 lg:gap-4 lg:text-center bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl shadow-lg lg:shadow-none border border-gray-50 lg:border-none">

                                        {/* Icon Bubble */}
                                        <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
                                            <Icon size={28} />
                                            <div className="absolute -bottom-2 lg:bottom-auto lg:-right-2 bg-white text-secondary-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-100">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary-900 mb-2">{step.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Desktop Arrow Helper (Visual Cue) */}
                                        {index !== STEPS.length - 1 && (
                                            <div className="hidden lg:block absolute top-6 -right-1/2 translate-x-1/2 text-gray-300">
                                                <ArrowRight size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call To Action */}
                <div className="mt-24 text-center">
                    <div className="inline-block bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Ready to Apply?</h3>
                        <p className="text-gray-600 mb-6">Send your CV and portfolio to our HR department.</p>
                        <a href="mailto:aksisfire@aksisfire.com.tr" className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30">
                            Apply Now
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Career;
