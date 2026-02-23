import { Link } from "react-router";
import { Users, Settings, Fuel, DollarSign } from "lucide-react";
import type { Car } from "../data/mockData";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Link
      to={`/cars/${car.id}`}
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
          {car.type}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <p className="text-muted-foreground text-sm">{car.brand}</p>
          <h3 className="text-foreground text-lg">{car.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Settings className="w-4 h-4 text-primary" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <DollarSign className="w-4 h-4 text-primary" />
            <span>{car.year}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-muted-foreground text-sm">Price per day</p>
            <p className="text-foreground text-xl">
              ${car.price}
            </p>
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </Link>
  );
}
