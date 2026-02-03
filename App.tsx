import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Application from './pages/Application';
import TestResearch from './pages/TestResearch';
import AfterSales from './pages/AfterSales';
import Agents from './pages/Agents';
import Contact from './pages/Contact';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import Career from './pages/Career';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartDrawer from './components/CartDrawer';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <CartProvider>
          <CartDrawer />
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            {/* Public Routes with Header and Footer */}
            <Routes>
              {/* Admin Login Route - no Header/Footer */}
              <Route path="/admin/login" element={<Login />} />

              {/* Admin Routes - uses AdminLayout */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<div className="p-8">Product management will appear here.</div>} />
                <Route path="news" element={<div className="p-8">News management will appear here.</div>} />
                <Route path="career" element={<div className="p-8">Career management will appear here.</div>} />
              </Route>

              {/* All other routes (public) will render Header and Footer */}
              <Route path="*" element={
                <>
                  <Header />
                  <main className="flex-grow pt-20"> {/* pt-20 to account for fixed header */}
                    <Routes>
                      <Route path="/" element={<Home />} />

                      {/* Products Page */}
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:slug" element={<ProductDetail />} />

                      {/* Application Page */}
                      <Route path="/application" element={<Application />} />

                      {/* Test & Research Page */}
                      <Route path="/test-research" element={<TestResearch />} />

                      {/* Contact Pages */}
                      <Route path="/contact/main" element={<Contact />} />
                      <Route path="/contact/after-sales" element={<AfterSales />} />
                      <Route path="/contact/agents" element={<Agents />} />

                      {/* News Pages */}
                      <Route path="/about/news" element={<NewsList />} />
                      <Route path="/about/news/:slug" element={<NewsDetail />} />

                      {/* Specific About Pages */}
                      <Route path="/about/who-we-are" element={<WhoWeAre />} />
                      <Route path="/about/what-we-do" element={<WhatWeDo />} />
                      <Route path="/about/career" element={<Career />} />

                      {/* Checkout Page */}
                      <Route path="/checkout" element={<Checkout />} />

                      {/* Dynamic Routes to handle the deeply nested menu structure without 20 files */}
                      <Route path="/:category" element={<GenericPage />} />
                      <Route path="/:category/:slug" element={<GenericPage />} />

                      {/* Fallback for public routes */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;