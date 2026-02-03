import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, ShoppingBag, Check, X } from 'lucide-react';
import { PRODUCT_CATALOG } from '../constants';
import { useCart } from '../context/CartContext';

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleQuantityChange = (id: number, val: number) => {
    setQuantities(prev => ({ ...prev, [id]: val }));
  };
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // Unique options for filters (derived from data)
  const categories = useMemo(() =>
    ['All Products', ...Array.from(new Set(PRODUCT_CATALOG.map(p => p.category)))],
    []);

  const allCertifications = useMemo(() =>
    Array.from(new Set(PRODUCT_CATALOG.flatMap(p => p.certifications))),
    []);

  const allMaterials = useMemo(() =>
    Array.from(new Set(PRODUCT_CATALOG.map(p => p.specs.material))),
    []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter(product => {
      // Category Match
      const categoryMatch = selectedCategory === 'All Products' || product.category === selectedCategory;

      // Certifications Match (OR logic: if product has ANY of selected certs. Change to EVERY for AND logic)
      const certMatch = selectedCerts.length === 0 ||
        selectedCerts.some(cert => product.certifications.includes(cert));

      // Material Match
      const materialMatch = selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.specs.material);

      return categoryMatch && certMatch && materialMatch;
    });
  }, [selectedCategory, selectedCerts, selectedMaterials]);

  // Handlers
  const toggleCert = (cert: string) => {
    setSelectedCerts(prev =>
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('All Products');
    setSelectedCerts([]);
    setSelectedMaterials([]);
  };

  const hasActiveFilters = selectedCategory !== 'All Products' || selectedCerts.length > 0 || selectedMaterials.length > 0;

  return (
    <div className="pb-20 font-sans">
      {/* Products Banner */}
      <div className="relative bg-secondary-900 text-white py-24 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Industrial Parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-secondary-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary-500 font-bold">Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
            Our Products
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            High-quality, certified components and spare parts for marine and industrial fire suppression systems.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between gap-2 mb-6 text-secondary-900 border-b pb-4">
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-primary-600" />
                  <h3 className="font-display font-bold text-xl">Filters</h3>
                </div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                    <X size={12} /> Clear
                  </button>
                )}
              </div>

              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-3 uppercase tracking-wide">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === category ? 'border-primary-600 bg-white' : 'border-gray-300'}`}>
                          {selectedCategory === category && <div className="w-2 h-2 rounded-full bg-primary-600"></div>}
                        </div>
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="hidden"
                        />
                        <span className={`text-sm transition-colors ${selectedCategory === category ? 'text-primary-600 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-3 uppercase tracking-wide">Certifications</h4>
                  <div className="space-y-2">
                    {allCertifications.map((cert) => (
                      <label key={cert} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCerts.includes(cert) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 bg-white'}`}>
                          {selectedCerts.includes(cert) && <Check size={12} className="text-white" />}
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedCerts.includes(cert)}
                          onChange={() => toggleCert(cert)}
                          className="hidden"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-3 uppercase tracking-wide">Material</h4>
                  <div className="space-y-2">
                    {allMaterials.map((mat) => (
                      <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedMaterials.includes(mat) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 bg-white'}`}>
                          {selectedMaterials.includes(mat) && <Check size={12} className="text-white" />}
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(mat)}
                          onChange={() => toggleMaterial(mat)}
                          className="hidden"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-gray-50 p-4 rounded text-center">
                  <h4 className="font-bold text-secondary-900 mb-2">Need Custom Specs?</h4>
                  <p className="text-xs text-gray-500 mb-4">We engineer solutions to meet specific regulatory requirements.</p>
                  <Link to="/contact/main" className="inline-block text-sm font-bold text-primary-600 hover:text-primary-700">
                    Contact Engineering
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Showing {filteredProducts.length} results</span>
              {hasActiveFilters && (
                <div className="flex gap-2">
                  {selectedCategory !== 'All Products' && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
                      {selectedCategory} <button onClick={() => setSelectedCategory('All Products')}><X size={10} /></button>
                    </span>
                  )}
                  {selectedCerts.map(c => (
                    <span key={c} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
                      {c} <button onClick={() => toggleCert(c)}><X size={10} /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                    <div className="aspect-square relative overflow-hidden bg-white border-b border-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 right-2 bg-secondary-900 text-white text-xs px-2 py-1 rounded font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Specs Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.certifications.slice(0, 2).map((cert, i) => (
                          <span key={i} className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                            {cert}
                          </span>
                        ))}
                        <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
                          {product.specs.material}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex flex-col gap-3 mt-4">
                        <Link
                          to={product.path || '#'}
                          className="w-full text-center text-primary-600 font-semibold text-sm hover:underline border border-transparent hover:border-primary-100 rounded py-1 transition-colors"
                        >
                          View Details
                        </Link>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => {
                                const current = quantities[product.id] || 1;
                                handleQuantityChange(product.id, Math.max(1, current - 1));
                              }}
                            >-</button>
                            <input
                              type="number"
                              min="1"
                              className="w-12 text-center border-x border-gray-300 py-1 text-sm focus:outline-none"
                              value={quantities[product.id] || 1}
                              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                            />
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => {
                                const current = quantities[product.id] || 1;
                                handleQuantityChange(product.id, current + 1);
                              }}
                            >+</button>
                          </div>
                          <button
                            onClick={() => addToCart(product, quantities[product.id] || 1)}
                            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded font-medium text-sm transition-colors shadow-sm"
                          >
                            <ShoppingBag size={16} /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-100 p-12 text-center">
                <Filter className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-gray-900">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;