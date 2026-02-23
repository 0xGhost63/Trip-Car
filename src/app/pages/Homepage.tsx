import { Link } from "react-router";
import { Shield, Clock, Award, Headphones, ArrowRight, Star } from "lucide-react";
import { CarCard } from "../components/CarCard";
import { cars } from "../data/mockData";
import { ScrollReveal } from "../components/ScrollReveal";

export function Homepage() {
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1751336620135-21dd3a074b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzcxNTczMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Drive Your Dream Car <span className="text-primary">Today</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience luxury and performance with our premium fleet of vehicles. From sports cars to SUVs, we have the perfect ride for every journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/home/cars"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Explore Our Fleet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/home/contact"
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md hover:bg-secondary/80 transition-colors border border-border"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose <span className="text-primary">Tripcar</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide exceptional service and premium vehicles to make your journey memorable
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Trusted & Safe</h3>
                <p className="text-muted-foreground text-sm">
                  All vehicles are fully insured and regularly maintained
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock customer service for your convenience
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Luxury vehicles from top brands worldwide
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Easy Booking</h3>
                <p className="text-muted-foreground text-sm">
                  Quick and hassle-free reservation process
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl text-foreground mb-2">
                  Featured <span className="text-primary">Vehicles</span>
                </h2>
                <p className="text-muted-foreground">
                  Explore our most popular luxury cars
                </p>
              </div>
              <Link
                to="/home/cars"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, i) => (
              <ScrollReveal key={car.id} delay={i * 100}>
                <CarCard car={car} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Premium Cars" },
              { value: "10K+", label: "Happy Clients" },
              { value: "50+", label: "Expert Drivers" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
                What Our Clients <span className="text-primary">Say</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read testimonials from our satisfied customers
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", title: "Business Executive" },
              { name: "Sarah Davis", title: "Travel Blogger" },
              { name: "Mike Johnson", title: "Entrepreneur" },
            ].map((person, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Exceptional service and beautiful cars. The booking process was smooth and the driver was professional. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full" />
                    <div>
                      <div className="text-foreground">{person.name}</div>
                      <div className="text-muted-foreground text-sm">{person.title}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              Ready to Hit the Road?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Book your dream car today and experience the luxury you deserve
            </p>
            <Link
              to="/home/cars"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Browse Our Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
