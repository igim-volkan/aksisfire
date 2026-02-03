import React, { useState, useEffect } from 'react';
import {
    Search,
    Filter,
    Eye,
    MoreHorizontal,
    ChevronDown,
    ChevronUp,
    Clock,
    User,
    Building2,
    Mail,
    Phone,
    MapPin,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';

interface Order {
    id: string;
    timestamp: string;
    company: {
        companyName: string;
        contactPerson: string;
        email: string;
        phone: string;
        location: string;
        message: string;
    };
    items: any[];
    itemCount: number;
    status: 'pending' | 'reviewed' | 'completed';
}

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('quote_requests') || '[]');
        setOrders(savedOrders);
    }, []);

    const toggleOrderDetails = (id: string) => {
        setSelectedOrder(selectedOrder === id ? null : id);
    };

    const updateStatus = (id: string, status: Order['status']) => {
        const updatedOrders = orders.map(order =>
            order.id === id ? { ...order, status } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem('quote_requests', JSON.stringify(updatedOrders));
    };

    const filteredOrders = orders.filter(order =>
        order.company.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-secondary-900 mb-2">Quote Requests</h1>
                    <p className="text-gray-500">Manage and respond to customer quotation inquiries.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all w-full md:w-64"
                        />
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Company</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Items</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 italic">
                                        No quote requests found.
                                    </td>
                                </tr>
                            ) : (
                                filteredOrders.map((order) => (
                                    <React.Fragment key={order.id}>
                                        <tr
                                            className={`hover:bg-gray-50/50 transition-colors cursor-pointer ${selectedOrder === order.id ? 'bg-primary-50/30' : ''}`}
                                            onClick={() => toggleOrderDetails(order.id)}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="font-mono text-sm font-bold text-secondary-900">{order.id}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xs">
                                                        {order.company.companyName.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-secondary-900 text-sm tracking-tight">{order.company.companyName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(order.timestamp).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-secondary-900">
                                                {order.itemCount} Items
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${order.status === 'pending' ? 'bg-secondary-50 text-secondary-600 border-secondary-100' :
                                                    order.status === 'reviewed' ? 'bg-primary-50 text-primary-600 border-primary-100' :
                                                        'bg-green-50 text-green-600 border-green-100'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                                    {selectedOrder === order.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Expanded Row */}
                                        {selectedOrder === order.id && (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-8 bg-gray-50/30 border-b border-gray-100">
                                                    <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-500">
                                                        {/* Contact Info */}
                                                        <div className="space-y-6">
                                                            <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-widest border-b pb-2">Client Details</h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="flex items-start gap-3">
                                                                    <User size={16} className="text-gray-400 mt-1" />
                                                                    <div>
                                                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Contact Person</p>
                                                                        <p className="text-sm font-medium text-secondary-900">{order.company.contactPerson}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-start gap-3">
                                                                    <Mail size={16} className="text-gray-400 mt-1" />
                                                                    <div>
                                                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Email</p>
                                                                        <p className="text-sm font-medium text-secondary-900">{order.company.email}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-start gap-3">
                                                                    <Phone size={16} className="text-gray-400 mt-1" />
                                                                    <div>
                                                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Phone</p>
                                                                        <p className="text-sm font-medium text-secondary-900">{order.company.phone}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-start gap-3">
                                                                    <MapPin size={16} className="text-gray-400 mt-1" />
                                                                    <div>
                                                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Location</p>
                                                                        <p className="text-sm font-medium text-secondary-900">{order.company.location || 'Not provided'}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Message / Requirements</p>
                                                                <p className="text-sm text-gray-600 bg-white p-4 rounded-xl border border-gray-100 italic">
                                                                    "{order.company.message || 'No specific requirements mentioned.'}"
                                                                </p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() => updateStatus(order.id, 'reviewed')}
                                                                    className="px-4 py-2 bg-secondary-900 text-white text-xs font-bold rounded-lg hover:bg-secondary-800 transition-colors"
                                                                >
                                                                    Mark as Reviewed
                                                                </button>
                                                                <button
                                                                    onClick={() => updateStatus(order.id, 'completed')}
                                                                    className="px-4 py-2 bg-primary-600 text-white text-xs font-bold rounded-lg hover:bg-primary-700 transition-colors"
                                                                >
                                                                    Complete Quote
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Items List */}
                                                        <div>
                                                            <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-widest border-b pb-2 mb-4">Requested Items</h3>
                                                            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                                                {order.items.map((item, idx) => (
                                                                    <div key={idx} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100 group">
                                                                        <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                                                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="text-sm font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">{item.name}</p>
                                                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.category}</p>
                                                                        </div>
                                                                        <div className="text-sm font-bold text-secondary-900 px-3 py-1 bg-gray-50 rounded-lg">
                                                                            x{item.quantity}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
