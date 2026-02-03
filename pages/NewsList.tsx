import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronRight, Clock, User, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import { NEWS_DATA, NAVIGATION_DATA } from '../constants';

const NewsList: React.FC = () => {
  return (
    <div className="font-sans pb-24">
      <SEO
        title="Latest News & Updates"
        description="Stay informed about the latest developments, project completions, and innovations at Aksisfire."
      />
      {/* Breadcrumb */}
      <div className="relative bg-secondary-900 text-white py-24 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920"
            alt="News Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={14} />
            <span className="text-primary-500 font-bold">News</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold relative inline-block">
            Latest News & Updates
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
                About Us
              </h3>
              <ul className="space-y-2">
                {NAVIGATION_DATA.find(item => item.label === "About Us")?.children?.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.path || '#'}
                      className={`block px-4 py-2 rounded text-sm transition-colors border-l-2 ${child.path === '/about/news'
                        ? 'bg-gray-50 border-primary-600 text-primary-700 font-semibold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content - News Grid */}
          <main className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_DATA.map((news) => (
                <div key={news.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                  <Link to={`/about/news/${news.slug}`} className="block overflow-hidden aspect-square relative bg-gray-50">
                    <div className="absolute inset-0 bg-secondary-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-secondary-900 shadow-sm flex items-center gap-1 border border-gray-100">
                      <Calendar size={12} className="text-primary-600" /> {news.date}
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col flex-grow">
                    <Link to={`/about/news/${news.slug}`}>
                      <h2 className="text-lg font-display font-bold text-secondary-900 mb-3 hover:text-primary-600 transition-colors line-clamp-3">
                        {news.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-4 flex-grow leading-relaxed">
                      {news.excerpt}
                    </p>
                    <Link
                      to={`/about/news/${news.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold text-xs hover:gap-3 transition-all mt-auto"
                    >
                      Read Full Story <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewsList;