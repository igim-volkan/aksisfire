import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, Lock, User, ArrowRight, AlertCircle, Phone, Mail } from 'lucide-react';

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
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Left Column - Image & Branding */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-secondary-900">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('/hero-marine.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-secondary-900/90"></div>

                <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
                    <div>
                        <Link to="/" className="inline-block">
                            <img src="/aksisfire-new.svg" alt="Aksisfire" className="h-12 brightness-0 invert" />
                        </Link>
                    </div>

                    <div className="max-w-md">
                        <div className="w-16 h-1 bg-primary-500 mb-6"></div>
                        <h1 className="text-4xl font-display font-bold leading-tight mb-4">
                            Advanced Marine Fire Protection Systems
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Certified solutions for ships, industrial facilities, and demanding environments.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-primary-500" />
                            +90 (216) 306 82 16
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-primary-500" />
                            aksisfire@aksisfire.com.tr
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <div className="lg:hidden flex justify-center mb-6">
                            <img src="/aksisfire-new.svg" alt="Aksisfire" className="h-10" />
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wide mb-4">
                            <ShieldAlert size={14} />
                            Admin Portal
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900">Welcome Back</h2>
                        <p className="mt-2 text-gray-600">Please enter your credentials to access the admin dashboard.</p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
                                        placeholder="Enter your username"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-md bg-red-50 p-4 border border-red-100 flex items-start">
                                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                                <div className="text-sm text-red-700 font-medium">{error}</div>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all shadow-lg shadow-primary-600/20"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="h-4 w-4 text-primary-300 group-hover:text-primary-200 transition-colors" />
                                </span>
                                Sign in
                                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} Aksisfire. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
