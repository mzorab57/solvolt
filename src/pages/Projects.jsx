

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Zap, Sun, Shield, Download } from "lucide-react";
import product from "/assets/images/generated.png";
import HorizontalCarousel from "@/components/ui/horizontal-carousel";

const Products = () => {
  // Base categories for filters (renamed as requested)
  const baseCategories = [
    {
      id: "residential",
      name: "Residential",
      icon: Zap,
      products: [
        {
          name: "Online UPS 1-10kVA",
          description: "High-frequency online UPS with pure sine wave output, ideal for sensitive equipment protection.",
          features: ["Pure Sine Wave", "LCD Display", "Smart Battery Management", "Cold Start Function"],
          warranty: "3 Years",
          image: product,
        },
        {
          name: "Modular UPS 10-800kVA",
          description: "Scalable modular UPS solution for data centers and critical applications.",
          features: ["N+X Redundancy", "Hot Swappable Modules", "High Efficiency", "Remote Monitoring"],
          warranty: "3 Years",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "commercial",
      name: "Commercial",
      icon: Sun,
      products: [
        {
          name: "Monocrystalline Solar Panels",
          description: "High-efficiency solar panels with 25-year performance warranty.",
          features: ["21-23% Efficiency", "Anti-PID", "IP68 Junction Box", "25-Year Warranty"],
          warranty: "25 Years",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
        },
        {
          name: "Polycrystalline Solar Panels",
          description: "Cost-effective solar solution with reliable performance.",
          features: ["17-19% Efficiency", "Weather Resistant", "Easy Installation", "20-Year Warranty"],
          warranty: "20 Years",
          image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "smart-energy",
      name: "Smart Energy",
      icon: Battery,
      products: [
        {
          name: "Pure Sine Wave Inverters",
          description: "Premium quality inverters for home and office applications.",
          features: ["Pure Sine Wave Output", "Overload Protection", "Soft Start", "LED Indicators"],
          warranty: "2 Years",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
        },
        {
          name: "Hybrid Solar Inverters",
          description: "Smart inverters combining solar and grid power with battery backup.",
          features: ["MPPT Technology", "Grid Tie Function", "Battery Management", "Mobile App Control"],
          warranty: "5 Years",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "green-building",
      name: "Green Building",
      icon: Shield,
      products: [
        {
          name: "Deep Cycle Batteries",
          description: "Long-lasting batteries designed for frequent charge and discharge cycles.",
          features: ["Deep Cycle Design", "Maintenance Free", "Long Service Life", "Safe Operation"],
          warranty: "3 Years",
          image: "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800&auto=format&fit=crop",
        },
        {
          name: "Lithium-Ion Battery Banks",
          description: "Advanced lithium technology for superior performance and longevity.",
          features: ["High Energy Density", "Fast Charging", "BMS Protection", "10+ Years Lifespan"],
          warranty: "10 Years",
          image: "https://images.unsplash.com/photo-1609315309733-95e5a7f44c50?w=800&auto=format&fit=crop",
        },
      ],
    },
  ];

  // Add "All Projects" filter combining all products
  const productCategories = [
    {
      id: "all",
      name: "All Projects",
      icon: Zap,
      products: baseCategories.flatMap((c) => c.products),
    },
    ...baseCategories,
  ];

  const galleryImages = [
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png", alt: "mountain" },
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png", alt: "sand" },
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png", alt: "cloud" },
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png", alt: "mountain" },
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png", alt: "sand" },
    { src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png", alt: "cloud" },
  ];

  return (

    <div>
      <section className="relative">
      <div className="relative hidden lg:block    ">
        <div style={{ backgroundImage: `url(${product})` }}  className="absolutev  aspect-auto lg:aspect-[4/1]   inset-0 bg-cover bg-center  "></div>
      </div>
      <div className="relative  ">
        <div style={{ backgroundImage: `url(${product})` }} className=" aspect-square   lg:hidden  inset-0  bg-cover bg-center "></div>
      </div>
      <div className="h-14 w-full bg-gradient-to-t from-[#fffefe] via-[#dddcdc] to-transparent absolute -bottom-[1%]"></div>

      </section>


    <section className="min-h-screen ">

      {/* Products Tabs */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 h-auto gap-1">
              {productCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 py-4 m-1 border  data-[state=active]:bg-primary-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                  {category.products.map((product, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden hover:shadow-hover transition-all duration-300 bg-gradient-card border-border"
                    >
                      <div className="relative">
                        <HorizontalCarousel images={galleryImages} />
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                          {product.warranty} Warranty
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-foreground">Key Features:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* <Button className="w-full gap-2">
                          Request Quote
                        </Button> */}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Solvolt Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Quality Guaranteed", desc: "All products backed by international standards" },
              { icon: Zap, title: "High Performance", desc: "Cutting-edge technology for maximum efficiency" },
              { icon: Sun, title: "Eco-Friendly", desc: "Sustainable solutions for a better tomorrow" },
              { icon: Battery, title: "Long Warranty", desc: "Extended warranty periods for peace of mind" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </section>
    </div>
  );
};

export default Products;
