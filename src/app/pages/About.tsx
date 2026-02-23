import { Target, Users, Award, Heart } from "lucide-react";

export function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1764605206511-7a649d9df63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNlZGFuJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc3MTQ4Njg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-4">
            About <span className="text-primary">Tripcar</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your trusted partner in luxury car rental services since 2011
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2011, Tripcar has been at the forefront of luxury car rental services, providing exceptional experiences to thousands of satisfied customers worldwide. What started as a small fleet of premium vehicles has grown into one of the most trusted names in the industry.
              </p>
              <p className="text-muted-foreground mb-4">
                Our commitment to excellence, attention to detail, and passion for automobiles have made us the preferred choice for business executives, celebrities, and discerning travelers who demand nothing but the best.
              </p>
              <p className="text-muted-foreground">
                Today, we operate a fleet of over 500 premium vehicles, ranging from exotic sports cars to luxury sedans and SUVs, all maintained to the highest standards and available for your next journey.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1768965468579-50f5cbef70a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHN1diUyMGx1eHVyeSUyMHZlaGljbGV8ZW58MXx8fHwxNzcxNTczMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We strive for perfection in every aspect of our service
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Customer Focus</h3>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground text-sm">
                Only the finest vehicles and service standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Passion</h3>
              <p className="text-muted-foreground text-sm">
                We love cars and it shows in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide unparalleled luxury car rental experiences that exceed expectations, combining premium vehicles, professional service, and innovative technology to make every journey extraordinary.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the world's most trusted and preferred luxury car rental service, setting new standards in quality, innovation, and customer satisfaction while expanding our presence globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              By the <span className="text-primary">Numbers</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Luxury Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Professional Drivers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
