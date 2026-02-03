import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronRight, Building2, User, Mail, Phone, MapPin, Send, CheckCircle2, ShoppingBag } from 'lucide-react';

const Checkout: React.FC = () => {
    const { cartItems, cartCount, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save Quote Request to localStorage for Admin Panel
        const newOrder = {
            id: `ORD-${Date.now()}`,
            timestamp: new Date().toISOString(),
            company: formData,
            items: cartItems,
            itemCount: cartCount,
            status: 'pending'
        };

        const existingOrders = JSON.parse(localStorage.getItem('quote_requests') || '[]');
        localStorage.setItem('quote_requests', JSON.stringify([newOrder, ...existingOrders]));

        console.log('Quote Request Saved:', newOrder);

        setIsSubmitted(true);

        // Clear cart after a short delay to show success
        setTimeout(() => {
            clearCart();
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <div className="pt-32 pb-24 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 size={48} />
                        </div>
                        <h1 className="text-3xl font-display font-bold text-secondary-900 mb-4">Quote Request Sent!</h1>
                        <p className="text-gray-600 text-lg mb-8">
                            Thank you for your interest. We have received your request for {cartCount} items.
                            Our technical team will review your specifications and contact you shortly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="py-3 px-8 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                                Continue Browsing
                            </Link>
                            <Link to="/" className="py-3 px-8 border-2 border-secondary-900 text-secondary-900 rounded-lg font-bold hover:bg-secondary-900 hover:text-white transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (cartCount === 0) {
        return (
            <div className="pt-32 pb-24 text-center">
                <div className="container mx-auto px-4">
                    <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
                    <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4">Your Quote List is Empty</h2>
                    <p className="text-gray-500 mb-8">Please add some products to your list before checking out.</p>
                    <Link to="/products" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                        Explore Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
                    <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <button onClick={() => navigate(-1)} className="hover:text-primary-600 transition-colors">Previous Page</button>
                    <ChevronRight size={14} />
                    <span className="text-secondary-900 font-bold">Request a Quote</span>
                </div>

                <h1 className="text-4xl font-display font-bold text-secondary-900 mb-12">
                    Request a Quotation
                    <span className="block w-20 h-1.5 bg-primary-600 mt-4"></span>
                </h1>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-8 flex items-center gap-3">
                                <Building2 className="text-primary-600" /> Company Information
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Company Name *</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                required
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Aksis Ship Management"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contactPerson" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Contact Person *</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                required
                                                type="text"
                                                id="contactPerson"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleInputChange}
                                                placeholder="Your full name"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Work Email *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@company.com"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+90 (XXX) XXX XX XX"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="location" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Country / City</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Istanbul, Turkey"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message / Specific Requirements</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project or specific certifications needed..."
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-secondary-900 text-white rounded-lg font-bold text-lg hover:bg-primary-600 transition-all shadow-xl flex items-center justify-center gap-3 transform active:scale-[0.98]"
                                >
                                    <Send size={20} />
                                    Submit Quote Request
                                </button>
                                <p className="text-xs text-gray-400 text-center uppercase tracking-widest font-bold">
                                    * Required Fields. Professional use only.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Quote Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-32">
                            <h2 className="text-xl font-display font-bold text-secondary-900 mb-6 border-b pb-4">
                                Quote Summary ({cartCount})
                            </h2>

                            <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-sm font-bold text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                                                {item.name}
                                            </h4>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">{item.category}</span>
                                                <span className="text-sm font-bold text-secondary-900">x{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <div className="flex justify-between text-gray-500 uppercase tracking-widest text-xs font-bold">
                                    <span>Subtotal Items</span>
                                    <span>{cartCount}</span>
                                </div>
                                <div className="flex justify-between text-secondary-900 text-lg font-bold">
                                    <span>Price Quote</span>
                                    <span className="text-primary-600">On Request</span>
                                </div>

                                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mt-6">
                                    <p className="text-xs text-primary-700 leading-relaxed font-medium">
                                        <CheckCircle2 size={12} className="inline mr-1" />
                                        Your request includes technical specification review and engineering support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
