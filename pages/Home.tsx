import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Anchor, Factory, FlaskConical, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { NAVIGATION_DATA, SOLUTIONS_CONTENT } from '../constants';

const Home: React.FC = () => {
  // Hero Slider State
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const HERO_ITEMS = [
    {
      id: 1,
      image: '/hero-marine.jpg',
      preTitle: 'Continuously improve & integrate quality',
      title: 'MARINE FIRE PROTECTION',
      description: 'Aksisfire has a multi-disciplined technical staff fully experienced in shipbuilding and fire protection system design and production techniques. Full use is made of the latest approved design and calculation programs.',
      primaryButton: { text: 'Get a Quote', link: '/contact/main' },
      secondaryButton: { text: 'View Solutions', link: '/fire-solutions' }
    },
    {
      id: 2,
      image: '/hero-products.jpg',
      preTitle: 'Certified & Reliable Components',
      title: 'HIGH PERFORMANCE PRODUCTS',
      description: 'Explore our wide range of internationally certified fire fighting products, from valves and cylinders to complete system components designed for safety and durability.',
      primaryButton: { text: 'View Products', link: '/products' },
      secondaryButton: { text: 'Contact Sales', link: '/contact/main' }
    }
  ];

  // Auto-advance hero slider
  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, [isHovered]);

  // Solutions Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const allSolutions = NAVIGATION_DATA.find(n => n.label === "Fire Solutions")?.children || [];
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, allSolutions.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="font-sans">
      <SEO
        title="Advanced Marine Fire Protection Systems"
        description="Aksisfire is a global leader in marine fire protection, providing certified CO2 and clean gas suppression systems for major shipbuilders worldwide."
      />
      {/* Hero Section (Slider) */}
      <section
        className="relative h-[600px] flex items-center overflow-hidden bg-secondary-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {HERO_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'} `}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white h-full flex items-center">
              <div className="max-w-3xl animate-fade-in-up">
                <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                  {item.preTitle}
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                  {item.title}
                </h1>
                <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={item.primaryButton.link} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded font-semibold transition-colors flex items-center gap-2">
                    {item.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link to={item.secondaryButton.link} className="bg-transparent border border-white hover:bg-white hover:text-secondary-900 text-white px-8 py-3 rounded font-semibold transition-colors">
                    {item.secondaryButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_ITEMS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentHeroIndex ? 'bg-primary-600 w-8' : 'bg-white/50 hover:bg-white'} `}
              aria-label={`Go to slide ${index + 1} `}
            />
          ))}
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">Aksisfire offers wide range of marine-related fire protection systems</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Within these fields, aksisfire's scope of work will cover the system design, equipment supply, field support and system start-up for new vessels or conversion according to the specification and Marine rules.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aksisfire has a multi-disciplined technical staff fully experienced in shipbuilding and fire protection system design and production techniques. Full use is made of the latest approved design and calculation programs.
              </p>

              <Link to="/about/who-we-are" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                Read More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img src="/who-we-are.jpg" alt="Aksis Fire Systems Ship" className="rounded-lg shadow-xl w-full h-full object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-600 hidden md:flex gap-12 text-center">
                <div>
                  <p className="text-4xl font-bold text-secondary-900">30+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary-900">1000+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Ships Protected</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary-900">2500+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Systems Built</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900">Our Fire Solutions</h2>
          </div>

          <div className="relative max-w-7xl mx-auto px-12">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg border border-gray-100 transition-all ${currentIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed hidden'
                  : 'bg-white text-secondary-900 hover:bg-primary-600 hover:text-white hover:border-primary-600'
                } z-10`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {allSolutions.map((solution, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={
                            solution.path?.split('/').pop() && SOLUTIONS_CONTENT[solution.path?.split('/').pop() || '']
                              ? SOLUTIONS_CONTENT[solution.path?.split('/').pop() || ''].image
                              : `https://picsum.photos/400/300?random=${idx + 10}`
                          }
                          alt={solution.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-1" title={solution.label}>
                          {solution.label}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {solution.path?.split('/').pop() && SOLUTIONS_CONTENT[solution.path?.split('/').pop() || '']
                            ? SOLUTIONS_CONTENT[solution.path?.split('/').pop() || ''].description
                            : "Advanced protection system designed for specific hazard environments."}
                        </p>
                        <Link to={solution.path || '#'} className="inline-block text-sm font-semibold text-primary-600 hover:text-primary-700">
                          Learn Details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg border border-gray-100 transition-all ${currentIndex >= maxIndex
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed hidden'
                  : 'bg-white text-secondary-900 hover:bg-primary-600 hover:text-white hover:border-primary-600'
                } z-10`}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-12">
            <Link to="/fire-solutions" className="bg-secondary-900 text-white px-8 py-3 rounded hover:bg-secondary-800 transition-colors">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a Customized Fire Safety Solution?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to design a system that meets your specific project requirements and regulatory standards.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact/main" className="bg-white text-primary-700 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;