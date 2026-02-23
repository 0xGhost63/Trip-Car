import { Star, Languages, Award, Clock } from "lucide-react";
import { drivers } from "../data/mockData";

export function Driver() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-foreground mb-4">
            Our Professional <span className="text-primary">Drivers</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Meet our team of experienced and certified chauffeurs dedicated to providing you with safe, comfortable, and professional transportation services.
          </p>
        </div>
      </section>

      {/* Why Choose Our Drivers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              Why Choose Our <span className="text-primary">Drivers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our chauffeurs are more than just drivers - they're hospitality professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Certified</h3>
              <p className="text-muted-foreground text-sm">
                All drivers are professionally certified and licensed
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Experienced</h3>
              <p className="text-muted-foreground text-sm">
                Years of professional driving experience
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Multilingual</h3>
              <p className="text-muted-foreground text-sm">
                Fluent in multiple languages for your convenience
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-2">Top Rated</h3>
              <p className="text-muted-foreground text-sm">
                Consistently high customer satisfaction ratings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Profiles */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-12 text-center">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-80">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-foreground text-xl">{driver.name}</h3>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-primary">{driver.rating}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{driver.experience} years experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Languages className="w-4 h-4 text-primary" />
                      <span>{driver.languages.join(", ")}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{driver.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl text-foreground mb-6">
              Driver <span className="text-primary">Requirements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-foreground text-xl mb-4">Certifications</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Professional driving license with clean record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Advanced driving course certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>First aid and safety training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Background verification clearance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground text-xl mb-4">Skills</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Excellent knowledge of local routes and traffic patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Professional communication and etiquette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Customer service excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5" />
                    <span>Punctuality and reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            Request a Professional Driver
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Book your vehicle with a chauffeur for the ultimate luxury experience
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
