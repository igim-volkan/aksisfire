import React from 'react';
import { Link, useNavigate, useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    ShoppingCart,
    Box,
    Newspaper,
    Briefcase,
    LogOut,
    Menu,
    X,
    ShieldCheck,
    ChevronRight,
    Bell
} from 'lucide-react';

const AdminLayout: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    const menuItems = [
        { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin/dashboard' },
        { label: 'Quote Requests', icon: <ShoppingCart size={20} />, path: '/admin/orders' },
        { label: 'Products', icon: <Box size={20} />, path: '/admin/products' },
        { label: 'News / Blog', icon: <Newspaper size={20} />, path: '/admin/news' },
        { label: 'Career', icon: <Briefcase size={20} />, path: '/admin/career' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`bg-secondary-900 text-white transition-all duration-300 flex flex-col z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            >
                {/* Logo Area */}
                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    {isSidebarOpen && (
                        <span className="font-display font-bold text-xl tracking-tight">Admin<span className="text-primary-600">Portal</span></span>
                    )}
                </div>

                {/* Nav Items */}
                <nav className="flex-grow py-6 px-3 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-4 p-3 rounded-xl transition-all group ${isActive ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <div className={`${isSidebarOpen ? '' : 'mx-auto'}`}>
                                    {item.icon}
                                </div>
                                {isSidebarOpen && (
                                    <span className="font-medium">{item.label}</span>
                                )}
                                {isActive && isSidebarOpen && (
                                    <ChevronRight size={16} className="ml-auto opacity-50" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Info / Logout */}
                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 w-full p-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all"
                    >
                        <div className={`${isSidebarOpen ? '' : 'mx-auto'}`}>
                            <LogOut size={20} />
                        </div>
                        {isSidebarOpen && <span className="font-medium">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-40">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-primary-600 relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-600 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-100 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-secondary-900">Aksisfire Admin</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">System Superuser</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-primary-600 p-0.5">
                                <div className="w-full h-full bg-secondary-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    AD
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
