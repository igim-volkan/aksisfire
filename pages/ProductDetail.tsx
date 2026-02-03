import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Check, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { useCart } from '../context/CartContext';
import { PRODUCT_CATALOG } from '../constants';

const ProductDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // Find product from catalog
    const catalogProduct = PRODUCT_CATALOG.find(p => p.path?.endsWith('/' + slug));

    if (!catalogProduct) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-secondary-900">Product not found</h2>
                <Link to="/products" className="text-primary-600 hover:underline mt-4 inline-block">Back to Products</Link>
            </div>
        );
    }

    // Merge catalog data with extended details (mocked for now as catalog is simple)
    const product = {
        id: catalogProduct.id,
        title: catalogProduct.name,
        category: catalogProduct.category,
        description: catalogProduct.description || 'High-performance component designed for marine fire suppression systems.',
        price: 'Start Quote',
        image: catalogProduct.image,
        application: `The ${catalogProduct.name} is a critical component in ${catalogProduct.category} for marine fire protection. It ensures reliable operation under extreme conditions found on vessels and offshore platforms. Compatible with standard marine fire suppression setups.`,
        specs: [
            { label: 'Material', value: catalogProduct.specs?.material || 'Standard Marine Grade' },
            { label: 'Pressure Rating', value: catalogProduct.specs?.pressure || 'High Pressure' },
            { label: 'Certification', value: 'MED / CE / Class Approved' },
            { label: 'Connection', value: 'Standard Thread / Flange' },
            { label: 'Temperature Range', value: '-20°C to +60°C' },
            { label: 'Origin', value: 'Turkey / EU' }
        ],
        drawing: '/tech-drawing-example.png' // Using the single example drawing for all
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.title,
            image: product.image,
            category: product.category
        }, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="font-sans pb-24">
            <SEO
                title={product.title}
                description={`${product.title} - ${product.description}`}
            />
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 border-b border-gray-100 mb-12 mt-8 md:mt-12 relative z-0">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-primary-600">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/products" className="hover:text-primary-600">Products</Link>
                    <ChevronRight size={14} />
                    <span className="text-secondary-900 font-semibold">{product.title}</span>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Top Section: Product Overview */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Left: Main Image */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex items-center justify-center h-[500px]">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Info & Actions */}
                    <div>
                        <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">{product.category}</span>
                        <h1 className="text-4xl font-display font-bold text-secondary-900 mb-6">{product.title}</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center border border-gray-300 rounded-lg h-14">
                                <button
                                    className="px-4 h-full text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >-</button>
                                <input
                                    type="number"
                                    min="1"
                                    className="w-16 h-full text-center border-x border-gray-300 text-lg font-medium focus:outline-none"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                />
                                <button
                                    className="px-4 h-full text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                                    onClick={() => setQuantity(quantity + 1)}
                                >+</button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className={`h-14 px-8 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg transform active:scale-95 min-w-[200px] ${isAdded ? 'bg-green-600 text-white' : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary-600/30'}`}
                            >
                                {isAdded ? (
                                    <>
                                        <Check size={20} />
                                        Added
                                    </>
                                ) : (
                                    <>
                                        <ShoppingBag size={20} />
                                        Add to Quote
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                <Check size={16} className="text-green-600" /> In Stock
                            </h4>
                            <p className="text-sm text-gray-500">Ready for immediate shipment. Worldwide delivery available.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Details & Specs */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Content */}
                    <div className="space-y-12">
                        {/* Application & Function */}
                        <div>
                            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6 border-l-4 border-primary-600 pl-4">
                                Application and Function
                            </h2>
                            <div className="prose text-gray-600 leading-relaxed">
                                <p>{product.application}</p>
                                <p className="mt-4">
                                    Designed to meet the rigorous safety standards of the marine industry, this component undergoes strict quality control tests including pressure testing and leakage verification. Ideal for new installations and retrofits on cargo vessels, tankers, and offshore platforms.
                                </p>
                            </div>
                        </div>

                        {/* Technical Specifications */}
                        <div>
                            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6 border-l-4 border-primary-600 pl-4">
                                Technical Specifications
                            </h2>
                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {product.specs.map((spec, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/2">{spec.label}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Drawing */}
                    <div>
                        <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6 border-l-4 border-primary-600 pl-4 flex items-center gap-3">
                            Technical Drawing
                            <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded">DWG-2024-001</span>
                        </h2>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="aspect-[4/3] flex items-center justify-center bg-white overflow-hidden rounded-lg mb-4">
                                <img
                                    src={product.drawing}
                                    alt="Technical Drawing"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button className="text-primary-600 text-sm font-bold hover:underline flex items-center gap-1">
                                    <FileText size={16} /> Download PDF Datasheet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
