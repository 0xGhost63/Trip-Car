import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { CarCard } from "../components/CarCard";
import { cars } from "../data/mockData";

export function CarList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const carTypes = ["All", "Sports Car", "Luxury Sedan", "SUV", "Convertible", "Electric Sedan"];
  const priceRanges = ["All", "Under $500", "$500-$700", "Over $700"];

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || car.type === selectedType;
    
    let matchesPrice = true;
    if (priceRange === "Under $500") matchesPrice = car.price < 500;
    else if (priceRange === "$500-$700") matchesPrice = car.price >= 500 && car.price <= 700;
    else if (priceRange === "Over $700") matchesPrice = car.price > 700;

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-foreground mb-4">
            Our <span className="text-primary">Fleet</span>
          </h1>
          <p className="text-muted-foreground">
            Browse our collection of premium luxury vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by brand or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>

            {/* Type Filter */}
            <div className="lg:w-64">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="lg:w-64">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-muted-foreground text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Showing {filteredCars.length} of {cars.length} vehicles</span>
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No vehicles found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
