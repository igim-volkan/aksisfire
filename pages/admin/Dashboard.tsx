import React from 'react';
import {
    Users,
    ShoppingCart,
    Box,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Quote Requests', value: '12', icon: <ShoppingCart />, color: 'bg-primary-600', trend: '+20%' },
        { label: 'Active Products', value: '84', icon: <Box />, color: 'bg-secondary-800', trend: '+4' },
        { label: 'Web Visitors', value: '1,280', icon: <Users />, color: 'bg-primary-700', trend: '+12.5%' },
        { label: 'Conversion Rate', value: '3.2%', icon: <TrendingUp />, color: 'bg-secondary-700', trend: '+0.4%' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-display font-bold text-secondary-900 mb-2">Systems Overview</h1>
                <p className="text-gray-500">Welcome back, Administrator. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl text-white ${stat.color} shadow-lg shadow-gray-200`}>
                                {stat.icon}
                            </div>
                            <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">{stat.trend}</span>
                        </div>
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                        <p className="text-3xl font-display font-bold text-secondary-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-display font-bold text-secondary-900">Recent Quote Requests</h2>
                        <button className="text-primary-600 text-sm font-bold hover:underline">View All</button>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-secondary-900 font-bold">
                                    MS
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-secondary-900 text-sm">Marine Shipping Co. Ltd</h4>
                                    <p className="text-xs text-gray-500">Request for 4 items • 2 hours ago</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] uppercase font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-full border border-primary-100">Pending Review</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Status */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-xl font-display font-bold text-secondary-900 mb-8">System Status</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-secondary-900">API Gateway</h4>
                                <p className="text-xs text-green-600">All systems operational</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-secondary-900">Database</h4>
                                <p className="text-xs text-green-600">Healthy • 12ms latency</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-secondary-900">Last Backup</h4>
                                <p className="text-xs text-amber-600">6 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-t pt-6 mt-6">
                            <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                                <AlertCircle size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-secondary-900">System Version</h4>
                                <p className="text-xs text-gray-500">v1.2.4-stable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
