import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem('admin_auth') === 'true';
    });

    const login = (password: string) => {
        // Simple hardcoded check for demo
        if (password === 'admin') {
            localStorage.setItem('admin_auth', 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('admin_auth');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
