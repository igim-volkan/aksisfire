import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as any)?.from?.pathname || "/admin/dashboard";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (login(password)) {
            navigate(from, { replace: true });
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-secondary-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900/50 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-2xl mb-6 shadow-2xl shadow-primary-600/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <ShieldAlert size={40} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-white mb-2">Aksisfire Admin</h1>
                    <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Secure Access Terminal</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-secondary-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Key Access Code</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    autoFocus
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-secondary-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20 text-sm">
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 group"
                        >
                            Authorize Access
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-gray-500 text-xs uppercase tracking-widest font-bold">
                    &copy; 2026 AKSIS MARİNE TRANS. LTD. ŞTİ.
                </p>
            </div>
        </div>
    );
};

export default Login;
