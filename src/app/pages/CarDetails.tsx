import { useParams, Link } from "react-router";
import { ArrowLeft, Users, Settings, Fuel, Calendar, Check } from "lucide-react";
import { cars } from "../data/mockData";
import { ScrollReveal } from "../components/ScrollReveal";

export function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-foreground mb-4">Car not found</h2>
          <Link to="/home/cars" className="text-primary hover:text-primary/80">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Back Button */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/home/cars"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cars
          </Link>
        </div>
      </section>

      {/* Car Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full">
                    {car.type}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal direction="right" delay={100}>
              <div>
                <div className="mb-6">
                  <p className="text-muted-foreground mb-2">{car.brand}</p>
                  <h1 className="text-4xl text-foreground mb-4">{car.name}</h1>
                  <p className="text-muted-foreground">{car.description}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-sm">Seats</p>
                      <p className="text-foreground">{car.seats} Persons</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-sm">Transmission</p>
                      <p className="text-foreground">{car.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Fuel className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-sm">Fuel Type</p>
                      <p className="text-foreground">{car.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-sm">Year</p>
                      <p className="text-foreground">{car.year}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-foreground text-xl mb-4">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Price per day</p>
                      <p className="text-4xl text-foreground">${car.price}</p>
                    </div>
                  </div>
                  <Link
                    to={`/home/cars/${car.id}/book`}
                    className="block w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all text-center hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                  >
                    Book Now
                  </Link>
                  <p className="text-muted-foreground text-sm text-center mt-4">
                    Free cancellation up to 24 hours before pickup
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Similar Cars */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl text-foreground mb-8">
              Similar <span className="text-primary">Vehicles</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars
              .filter((c) => c.id !== car.id && c.type === car.type)
              .slice(0, 3)
              .map((similarCar, i) => (
                <ScrollReveal key={similarCar.id} delay={i * 100}>
                  <Link
                    to={`/home/cars/${similarCar.id}`}
                    className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all block"
                  >
                    <div className="h-48">
                      <img
                        src={similarCar.image}
                        alt={similarCar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm">{similarCar.brand}</p>
                      <h3 className="text-foreground mb-2">{similarCar.name}</h3>
                      <p className="text-primary">${similarCar.price}/day</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
