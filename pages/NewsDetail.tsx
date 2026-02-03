import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import { NEWS_DATA } from '../constants';

const NewsDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const newsItem = NEWS_DATA.find(n => n.slug === slug);

    if (!newsItem) {
        return <Navigate to="/about/news" replace />;
    }

    // Find recent news (excluding current)
    const recentNews = NEWS_DATA.filter(n => n.id !== newsItem.id).slice(0, 3);

    return (
        <div className="pb-20 font-sans">
            <SEO
                title={newsItem.title}
                description={newsItem.excerpt}
            />
            {/* Simple Header */}
            <div className="bg-secondary-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/about/news" className="hover:text-white transition-colors">News</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-500 font-bold truncate max-w-[200px]">{newsItem.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 min-h-[400px]">
                    <div className="h-[400px] w-full relative">
                        <img
                            src={newsItem.image}
                            alt={newsItem.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">
                            <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                                <span className="bg-primary-600 px-3 py-1 rounded">Company News</span>
                                <span className="flex items-center gap-1 opacity-90"><Calendar size={14} /> {newsItem.date}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight shadow-sm">
                                {newsItem.title}
                            </h1>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 p-8 md:p-12">
                        <div className="lg:col-span-8">
                            <article className="prose prose-lg max-w-none text-gray-700 leading-loose">
                                {newsItem.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </article>

                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <Link to="/about/news" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium transition-colors">
                                    <ArrowLeft size={18} /> Back to News
                                </Link>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                                    <Share2 size={18} /> Share
                                </button>
                            </div>
                        </div>

                        <aside className="lg:col-span-4 space-y-8">
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-xl font-display font-bold text-secondary-900 mb-6 border-b pb-2">Recent News</h3>
                                <div className="space-y-6">
                                    {recentNews.map(item => (
                                        <Link key={item.id} to={`/about/news/${item.slug}`} className="group block">
                                            {/* Image removed as per request */}
                                            <h4 className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm mb-1">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-gray-500">{item.date}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary-600 p-6 rounded-lg text-white">
                                <h3 className="font-display font-bold text-xl mb-3">Stay Updated</h3>
                                <p className="text-red-100 text-sm mb-4">Subscribe to our newsletter to receive the latest updates and technical bulletins.</p>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded text-gray-800 mb-3 focus:outline-none focus:ring-2 focus:ring-white" />
                                    <button className="w-full bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-2 rounded transition-colors">Subscribe</button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;