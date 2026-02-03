import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, User, Send } from 'lucide-react';

const AfterSales: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-secondary-900 text-white py-20 mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-secondary-900">
                    {/* Abstract background pattern could go here */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-900 opacity-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold">After Sales</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
                        After Sales Support
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                        Dedicated support and rapid spare parts delivery to keep your systems operational.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left Column: Content & Profile */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                                Global Spare Parts Delivery
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="font-medium text-secondary-800 mb-4 text-xl">
                                    Aksisfire is well organised to deliver spares worldwide.
                                </p>
                                <p>
                                    With our well stocked warehouse, we ensure that key components are always available
                                    for rapid delivery to meet your needs without delay. We understand the critical nature
                                    of fire safety systems and strive to minimize downtime.
                                </p>
                            </div>
                        </div>

                        {/* Manager Profile Card */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-lg">
                            <div className="w-32 h-32 flex-shrink-0">
                                <img
                                    src="/mehmet-mutlu.jpg"
                                    alt="Mehmet MUTLU - After-Sales Manager"
                                    className="w-full h-full object-cover object-top rounded-full border-4 border-gray-50 shadow-md"
                                />
                            </div>

                            <div className="flex-1 text-center sm:text-left space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-display text-secondary-900">Mehmet MUTLU</h3>
                                    <p className="text-primary-600 font-medium tracking-wide">After-Sales Manager</p>
                                </div>

                                <div className="space-y-2">
                                    <a href="mailto:mehmet@aksisfire.com.tr" className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-primary-600 transition-colors group">
                                        <Mail size={16} className="text-primary-500" />
                                        <span className="font-medium text-sm">mehmet@aksisfire.com.tr</span>
                                    </a>

                                    <a href="tel:+905078152080" className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-primary-600 transition-colors group">
                                        <Phone size={16} className="text-primary-500" />
                                        <span className="font-medium text-sm">+90 (507) 815 20 80</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-display font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Send className="text-primary-600" size={24} />
                            Send us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="+90 555 000 0000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Spare parts inquiry..."
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default AfterSales;
