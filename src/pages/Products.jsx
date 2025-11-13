import React, { useEffect, useState } from 'react';
import { Package, Filter, Zap, ArrowRight, Search } from 'lucide-react';
import productHero from "/assets/images/bgproduct.jpg";

// Static dataset: products for filters and cards
const STATIC_PRODUCTS = [
  {
    id: 1,
    name: 'Battery Bank 20kWh',
    category: 'Batteries',
    description: 'Commercial grade battery bank for large scale storage',
    features: ['20kWh Total', 'Modular Design', 'Smart Monitoring', 'Expandable'],
    price: 9000,
    warranty: '8 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png",
  },
  {
    id: 2,
    name: 'Hybrid Inverter 8kW',
    category: 'Inverters',
    description: 'Hybrid inverter combining grid and solar capabilities',
    features: ['Grid Interactive', '8000W Output', 'Built-in WiFi', 'Surge Protection'],
    price: 2800,
    warranty: '5 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png",
  },
  {
    id: 3,
    name: 'Inverter 5kW Pure Sine',
    category: 'Inverters',
    description: 'Pure sine wave inverter for clean power conversion',
    features: ['Pure Sine Wave', '5000W Continuous', '110-280V Input Range', 'High Efficiency'],
    price: 1200,
    warranty: '5 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png",
  },
  {
    id: 4,
    name: 'Lithium Battery 10kWh',
    category: 'Batteries',
    description: 'Advanced lithium battery system for energy storage',
    features: ['10kWh Capacity', 'LiFePO4 Chemistry', 'Fast Charging', 'Smart BMS'],
    price: 5000,
    warranty: '10 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png",
  },
  {
    id: 5,
    name: 'Solar Panel 400W Mono',
    category: 'Solar Panels',
    description: 'Monocrystalline solar panel with high efficiency',
    features: ['400W Output', 'High Efficiency 21%', 'Anti-reflective Coating', 'Durable Frame'],
    price: 250,
    warranty: '25 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png",
  },
  {
    id: 6,
    name: 'UPS Series Pro 10kVA',
    category: 'UPS',
    description: 'High-performance UPS system for continuous power supply',
    features: ['Online Double Conversion', 'SNMP Card Ready', 'LCD Display', 'Hot-swappable Batteries'],
    price: 4500,
    warranty: '3 Years',
    rating: 4.8,
    image_url: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png",
  },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Initialize with static dataset
    setProducts(STATIC_PRODUCTS);
    setFilteredProducts(STATIC_PRODUCTS);
    setLoading(false);
  }, []);

  useEffect(() => {
    let result = products;

    if (filter !== 'all') {
      result = result.filter(p => p.category === filter);
    }

    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


    setFilteredProducts(result);
  }, [filter, searchTerm, products]);

  const categories = ['all', ...Array.from(new Set(products.map((p) => p.category))).filter(Boolean)];

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section className="relative">
        <div className="relative hidden lg:block">
          <div
            style={{ backgroundImage: `url(${productHero})` }}
            className="absolutev aspect-auto lg:aspect-[3/1] inset-0 bg-cover bg-center"
          ></div>
        </div>
        <div className="relative lg:hidden">
          <div
            style={{ backgroundImage: `url(${productHero})` }}
            className="aspect-square inset-0 bg-cover bg-center"
          ></div>
        </div>
        <div className="h-14 w-full bg-gradient-to-t from-[#fffefe] via-[#dddcdc] to-transparent absolute -bottom-[1%]"></div>
      </section>

     

      <section className="py-12 bg-white border-b max-w-7xl mx-auto  border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

            
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded font-medium transition-all flex items-center space-x-2 capitalize ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary-primary to-primary-primary/80 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category === 'all' ? 'All Products' : category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  max-w-7xl mx-auto  ">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-primary-primary border-t-primary-primary/50 rounded animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading products...</p>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No products found matching your criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded border border-gray-200 hover:border-primary-primary overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-primary/10 to-primary-primary/30">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-16 h-16 text-primary-primary" />
                        </div>
                      )}

                    
                     {/* category tag */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center space-x-1 bg-primary-primary/30 text-white px-3 py-1 rounded text-xs font-light">
                          <Zap className="w-3 h-3" />
                          <span>{product.category}</span>
                        </span>
                      </div>
                    </div>

                    {/* text */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                      {product.features && product.features.length > 0 && (
                        <div className="mb-4 space-y-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-primary"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                          {product.features.length > 3 && (
                            <p className="text-xs text-gray-500">+{product.features.length - 3} more features</p>
                          )}
                        </div>
                      )}

                     

                     
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

     
    </div>
  );
}