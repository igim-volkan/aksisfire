import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

    return (
        <div className={`fixed inset-0 z-[60] font-sans ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="text-primary-600" size={24} />
                        <h2 className="text-xl font-display font-bold text-secondary-900">Shopping Cart ({cartCount})</h2>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 opacity-70">
                            <ShoppingBag size={64} className="mb-4 text-gray-300" />
                            <p className="text-lg font-medium">Your cart is empty</p>
                            <p className="text-sm">Add some fire suppression products to get started.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-6 text-primary-600 font-bold hover:underline"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 group">
                                    {/* Image */}
                                    <div className="w-20 h-20 bg-white rounded border border-gray-200 overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-secondary-900 text-sm">{item.name}</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">{item.category}</span>
                                        </div>

                                        <div className="flex items-center justify-between mt-2">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center bg-white border border-gray-200 rounded h-8">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 h-full flex items-center"
                                                >
                                                    -
                                                </button>
                                                <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 h-full flex items-center"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                title="Remove item"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-600 font-medium">Total Items</span>
                            <span className="text-xl font-bold text-secondary-900">{cartCount}</span>
                        </div>
                        <Link
                            to="/checkout" // Placeholder route for now
                            className="block w-full bg-primary-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            onClick={() => setIsCartOpen(false)} // Close drawer on navigation
                        >
                            Request Quote / Checkout
                        </Link>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Secure quote request for certified marine systems.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
