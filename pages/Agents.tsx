import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Globe, Navigation, Plus, X } from 'lucide-react';

interface Agent {
    id: string;
    country: string;
    company: string;
    contactPerson: string;
    address: string;
    phone: string;
    fax?: string;
    cellPhone?: string;
    email: string;
    website: string;
    coordinates: { top: string; left: string }; // Percentage for map positioning
}

const AGENTS: Agent[] = [
    {
        id: 'turkey',
        country: 'TÜRKİYE',
        company: 'Aksis Yangın Söndürme Sistemleri A.Ş.',
        contactPerson: 'Headquarters',
        address: 'Deri OSB, Kazlıçeşme Cd. No:14/A, 34953 Tuzla / İstanbul',
        phone: '+90 (216) 306 82 16',
        email: 'aksisfire@aksisfire.com.tr',
        website: 'www.aksisfire.com.tr',
        coordinates: { top: '33%', left: '56%' }
    },
    {
        id: 'russia',
        country: 'RUSSIA',
        company: 'Polar Spb LLC',
        contactPerson: 'Alper Hazne',
        address: '199178, St. Petersburg, Vasilevsky Ostrov 13th Line 30, Office 2',
        phone: '+7 812 327 1719',
        email: 'Alper.Hazne@polarmarine.ru',
        website: 'www.polarmarine.ru',
        coordinates: { top: '15%', left: '58%' }
    },
    {
        id: 'greece',
        country: 'GREECE',
        company: 'Intra Mare',
        contactPerson: 'Tassos Skafas',
        address: 'Piraeus office, 4, Skouze Str., 185 36 Piraeus, Greece',
        phone: '+30 210 4293843',
        fax: '+30 210 4293845',
        email: 't.skafas@intramare.gr',
        website: 'www.intramare.gr',
        coordinates: { top: '32%', left: '54%' }
    },
    {
        id: 'brazil',
        country: 'BRAZIL',
        company: 'Macnor Marine',
        contactPerson: 'Pedro M. Guimarães',
        address: 'Macnor Marine Consult. Empr. ltda. Av. Evandro Lins e Silva, 840 – Sl 1501 Barra da Tijuca – RJ – Brasil',
        phone: '+55 21 2135-2121',
        cellPhone: '22631-470',
        email: 'pedro@macnor.com.br',
        website: 'www.macnor.com.br',
        coordinates: { top: '70%', left: '32%' }
    },
    {
        id: 'india',
        country: 'INDIA',
        company: 'Arcum Marine Services (P) Limited',
        contactPerson: 'Sunil Somani',
        address: '114, Western Edge II Off Western Express Highway Borivali East Mumbai -400 066 India',
        phone: '',
        cellPhone: '+91 9833004194',
        email: 'sunil@arcumgroup.com',
        website: 'www.arcumgroup.com',
        coordinates: { top: '42%', left: '68%' }
    }
];

const Agents: React.FC = () => {
    const [activeAgent, setActiveAgent] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Application sent successfully! We will contact you soon.');
        setIsModalOpen(false);
    };

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
                        <span className="text-primary-500 font-bold">Agents</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        Global Network
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                        Our authorized agents around the world ensuring local support and service.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">

                {/* Map Section */}
                <div className="mb-24 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner relative overflow-hidden group">
                    <h2 className="text-center text-primary-600 font-bold uppercase tracking-widest mb-8">Worldwide Coverage</h2>

                    {/* Become an Agent Button */}
                    <div className="absolute bottom-8 right-8 z-20">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative flex items-center justify-center w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all hover:scale-110"
                        >
                            <Plus size={24} />
                            <span className="absolute right-full mr-3 bg-secondary-900 text-white text-xs font-bold py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Become our Agent
                            </span>
                        </button>
                    </div>

                    <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto">
                        {/* World Map SVG - Simplified Outline */}
                        <svg viewBox="0 0 1000 500" className="w-full h-full fill-current text-gray-300 drop-shadow-sm">
                            {/* Simplified paths for continents - illustrative */}
                            <path d="M250,150 q-20,-30 -50,0 q-50,50 -20,100 q30,50 80,20 q50,-30 40,-80 q-10,-40 -50,-40z" /> {/* N. America */}
                            <path d="M300,300 q-10,-10 -30,20 q-20,30 0,60 q20,30 50,0 q30,-30 0,-60z" /> {/* S. America (Brazil area) */}
                            <path d="M450,100 q0,-50 100,0 q100,50 50,150 q-50,100 -100,50 q-50,-50 -50,-200z" /> {/* Europe/Africa */}
                            <path d="M600,80 q50,-50 200,50 q150,100 0,150 q-150,50 -200,-50 q-50,-100 0,-150z" /> {/* Asia (Russia/India) */}
                            {/* Better to use an image if SVG paths are too complex to generate manually. Using a placeholder background image instead. */}
                            <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" width="1000" height="500" opacity="0.4" />
                        </svg>

                        {/* Pins */}
                        {AGENTS.map((agent) => (
                            <div
                                key={agent.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-50"
                                style={{ top: agent.coordinates.top, left: agent.coordinates.left }}
                                onMouseEnter={() => setActiveAgent(agent.id)}
                                onMouseLeave={() => setActiveAgent(null)}
                            >
                                <div className="relative">
                                    <MapPin className="w-8 h-8 text-primary-600 drop-shadow-md" fill="currentColor" />
                                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl text-center text-sm border border-gray-100 transition-all duration-300 ${activeAgent === agent.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                        <div className="font-bold text-secondary-900">{agent.country}</div>
                                        <div className="text-gray-500 text-xs">{agent.company}</div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4 italic">Hover over pins to see details</p>
                </div>

                {/* Agents Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {AGENTS.map((agent) => (
                        <div
                            key={agent.id}
                            className={`bg-white rounded-xl border p-8 transition-all duration-300 ${activeAgent === agent.id ? 'border-primary-500 shadow-xl ring-2 ring-primary-100' : 'border-gray-100 shadow-lg hover:shadow-xl'}`}
                            onMouseEnter={() => setActiveAgent(agent.id)}
                            onMouseLeave={() => setActiveAgent(null)}
                        >
                            <div className="mb-6">
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-secondary-900">{agent.country} AGENT</h2>
                                    <p className="text-gray-500 text-sm font-medium">{agent.company}</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-start gap-3">
                                    <UserIcon className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-gray-400 uppercase tracking-wide">Contact Person</span>
                                        <span className="font-medium text-secondary-800">{agent.contactPerson}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Navigation className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-gray-400 uppercase tracking-wide">Address</span>
                                        <span>{agent.address}</span>
                                    </div>
                                </div>

                                {(agent.phone || agent.cellPhone) && (
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <span className="block text-xs text-gray-400 uppercase tracking-wide">Phone</span>
                                            {agent.phone && <div className="hover:text-primary-600 transition-colors"><a href={`tel:${agent.phone.replace(/\s/g, '')}`}>{agent.phone}</a></div>}
                                            {agent.cellPhone && <div className="hover:text-primary-600 transition-colors"><a href={`tel:${agent.cellPhone.replace(/\s/g, '')}`}>{agent.cellPhone} {agent.id === 'brazil' ? '(Cell)' : ''}</a></div>}
                                            {agent.fax && <div className="text-gray-400 text-sm">Fax: {agent.fax}</div>}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-gray-400 uppercase tracking-wide">Email</span>
                                        <a href={`mailto:${agent.email}`} className="hover:text-primary-600 transition-colors font-medium">{agent.email}</a>
                                    </div>
                                </div>

                                {agent.website && (
                                    <div className="pt-4 mt-4 border-t border-gray-100">
                                        <a
                                            href={`http://${agent.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline text-sm"
                                        >
                                            Visit Website <ChevronRight size={14} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Become Agent Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="bg-primary-600 p-6 flex items-center justify-between text-white">
                            <h3 className="text-2xl font-display font-bold">Become Our Agent</h3>
                            <button onClick={() => setIsModalOpen(false)} className="hover:bg-primary-700 p-1 rounded transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-4 max-h-[80vh] overflow-y-auto">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
                                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Your company name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Contact Person</label>
                                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Full name" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                    <input type="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                                    <input type="tel" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="+123..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Country / Region</label>
                                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Target market" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea rows={3} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none resize-none" placeholder="Tell us about your company..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-secondary-900 text-white font-bold py-3 rounded-lg hover:bg-secondary-800 transition-colors mt-4">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

// Start Helper Component
const UserIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default Agents;
