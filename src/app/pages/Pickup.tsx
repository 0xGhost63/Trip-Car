import { useParams, Link } from "react-router";
import { cars } from "../data/mockData";
import { useState } from "react";

export function Pickup() {
    const { id } = useParams();
    const car = cars.find((c) => c.id === id);
    const [payment, setPayment] = useState("Visa");
    const [requestInfo, setRequestInfo] = useState<{ arrival: string; locations: string[]; destination: string } | null>(null);

    const handleRequest = () => {
        // Simulate arrival time and locations
        const arrivalMinutes = Math.floor(Math.random() * 11) + 5; // 5-15 mins
        const arrival = `${arrivalMinutes} mins`;
        const locations = ["Downtown", "Airport", "Hotel Plaza", "City Center", "Station"].slice(0, 4);
        const destination = `${arrivalMinutes + 10} mins to destination`;
        setRequestInfo({ arrival, locations, destination });
    };

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
        <div className="bg-background min-h-screen p-8">
            <Link to="/home/cars/${car.id}" className="text-primary hover:text-primary/80 mb-4 inline-block">
                ← Back to Car Details
            </Link>
            <h1 className="text-3xl text-foreground mb-6">Pickup &amp; Payment for {car.name}</h1>
            <section className="mb-8">
                <h2 className="text-2xl text-foreground mb-4">Select Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Visa",
                        "MasterCard",
                        "American Express",
                        "Debit Card",
                        "PayPal",
                    ].map((method) => (
                        <label key={method} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                value={method}
                                checked={payment === method}
                                onChange={() => setPayment(method)}
                                className="form-radio h-4 w-4 text-primary"
                            />
                            <span className="text-foreground">{method}</span>
                        </label>
                    ))}
                </div>
            </section>
            <button
                onClick={handleRequest}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors mb-6"
            >
                Request Pickup
            </button>
            {requestInfo && (
                <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl text-foreground mb-4">Pickup Details</h3>
                    <p className="text-muted-foreground mb-2">
                        <strong>Estimated Arrival:</strong> {requestInfo.arrival}
                    </p>
                    <p className="text-muted-foreground mb-2">
                        <strong>Available Locations:</strong> {requestInfo.locations.join(", ")}
                    </p>
                    <p className="text-muted-foreground">
                        <strong>Estimated Time to Destination:</strong> {requestInfo.destination}
                    </p>
                </div>
            )}
        </div>
    );
}
