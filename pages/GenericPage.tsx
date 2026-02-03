import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { NAVIGATION_DATA, SOLUTIONS_CONTENT, CERTIFICATES_DATA } from '../constants';

const GenericPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  // Find related links based on category for sidebar
  const activeCategory = NAVIGATION_DATA.find(item =>
    item.path?.includes(category || '') ||
    (category === 'solutions' && item.label === 'Fire Solutions')
  );

  // Helper to format title from slug
  const title = slug && SOLUTIONS_CONTENT[slug]
    ? SOLUTIONS_CONTENT[slug].title
    : slug
      ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : activeCategory?.label || category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');



  return (
    <div className="pb-20 font-sans">
      {/* Header Banner */}
      <div className="relative bg-secondary-900 text-white py-24 mb-12 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-marine.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary-500 font-bold">
              {activeCategory?.label || category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            {slug && (
              <>
                <ChevronRight size={14} />
                <span className="text-white">{title}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600"></span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg sticky top-24 shadow-sm border border-gray-100">
              <h3 className="font-display font-bold text-xl mb-6 text-secondary-900 border-b pb-4">
                {activeCategory?.label || 'Menu'}
              </h3>
              <ul className="space-y-2">
                {activeCategory?.children?.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.path || '#'}
                      className={`block px-4 py-2 rounded text-sm transition-colors border-l-2 ${window.location.hash.includes(child.path || 'xyz')
                        ? 'bg-gray-50 border-primary-600 text-primary-700 font-semibold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                )) || (
                    <li><Link to="/" className="text-gray-600 hover:text-primary-600">Back to Home</Link></li>
                  )}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose max-w-none text-gray-600">
              {slug === 'certificates' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
                  {CERTIFICATES_DATA.map((cert) => (
                    <div key={cert.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-center h-64">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : slug && SOLUTIONS_CONTENT[slug] ? (
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="lg:w-1/2">
                    <img
                      src={SOLUTIONS_CONTENT[slug].image}
                      alt={SOLUTIONS_CONTENT[slug].title}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">Overview</h2>
                    <p className="lead text-xl text-gray-500 mb-6 whitespace-pre-line">
                      {SOLUTIONS_CONTENT[slug].content}
                    </p>
                  </div>
                </div>
              ) : !slug && activeCategory?.children ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
                  {activeCategory.children.map((child) => {
                    const childSlug = child.path?.split('/').pop() || '';
                    const content = SOLUTIONS_CONTENT[childSlug];

                    return (
                      <Link
                        key={child.label}
                        to={child.path || '#'}
                        className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col"
                      >
                        <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
                          {content?.image ? (
                            <img
                              src={content.image}
                              alt={content.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                              <span>No Image</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-display font-bold text-lg text-secondary-900 group-hover:text-primary-600 transition-colors mb-2">
                            {child.label}
                          </h3>
                          <span className="text-primary-600 font-semibold text-sm flex items-center mt-auto group-hover:translate-x-1 transition-transform">
                            View Details <ChevronRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <>
                  <img
                    src={`https://picsum.photos/900/400?random=${slug?.length || 5}`}
                    alt={title}
                    className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
                  />

                  <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">Overview</h2>
                  <p className="lead text-xl text-gray-500 mb-6">
                    Aksisfire Systems provides world-class <strong>{title}</strong> designed for reliability and efficiency in critical situations.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </>
              )}

              {slug && slug !== 'certificates' && (
                <>
                  <div className="my-8 p-6 bg-slate-50 border-l-4 border-primary-600 rounded shadow-sm">
                    <h4 className="text-secondary-900 font-bold text-lg mb-2">Technical Specifications</h4>
                    <p className="text-gray-600 text-sm mb-4">Typical specifications for this system type:</p>
                    <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-sm text-secondary-800">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div> International Approval: MED / CE</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div> Operating Pressure: High / Low</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div> Material: Marine Grade Stainless Steel</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div> Activation: Manual & Automatic</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">Applications</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary-600">
                    <li>Commercial Shipping Vessels</li>
                    <li>Offshore Platforms</li>
                    <li>Industrial Manufacturing Plants</li>
                    <li>Chemical Storage Facilities</li>
                  </ul>

                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">Why Choose Aksis?</h3>
                  <p>
                    Our {title} is rigorously tested in our in-house fire test room to ensure it meets the highest safety standards. We offer full lifecycle support from design and production to installation and after-sales maintenance.
                  </p>
                </>
              )}
            </div>

            {slug !== 'certificates' && (
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-secondary-900 rounded-lg text-white shadow-lg">
                <div className="mb-6 md:mb-0">
                  <h4 className="font-bold text-xl text-white mb-2">Interested in this system?</h4>
                  <p className="text-gray-400">Contact our engineering team for a technical consultation.</p>
                </div>
                <Link to="/contact/main" className="bg-primary-600 text-white px-8 py-3 rounded font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Contact Us
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;