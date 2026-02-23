import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
    ArrowLeft,
    Calendar,
    MapPin,
    User,
    Phone,
    Mail,
    Clock,
    CreditCard,
    Shield,
    CheckCircle,
    Car,
} from "lucide-react";
import { cars } from "../data/mockData";
import { ScrollReveal } from "../components/ScrollReveal";

export function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find((c) => c.id === id);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "",
        pickupTime: "",
        dropoffDate: "",
        dropoffTime: "",
        driverNeeded: false,
        additionalNotes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        field: string,
        value: string | boolean
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            navigate("/home");
        }, 2500);
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

    if (submitted) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center px-4">
                <ScrollReveal>
                    <div className="text-center max-w-md">
                        <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <CheckCircle className="w-12 h-12 text-primary" />
                        </div>
                        <h2 className="text-3xl text-foreground mb-4">
                            Booking Confirmed!
                        </h2>
                        <p className="text-muted-foreground mb-2">
                            Your reservation for the{" "}
                            <span className="text-primary font-medium">{car.name}</span> has
                            been received.
                        </p>
                        <p className="text-muted-foreground text-sm mb-6">
                            We'll send a confirmation to{" "}
                            <span className="text-foreground">{formData.email}</span>
                        </p>
                        <div className="bg-card border border-border rounded-lg p-4 mb-6">
                            <p className="text-muted-foreground text-sm">
                                Redirecting you to home page...
                            </p>
                            <div className="w-full bg-secondary rounded-full h-1.5 mt-3 overflow-hidden">
                                <div
                                    className="bg-primary h-1.5 rounded-full"
                                    style={{
                                        animation: "fillBar 2.5s ease-in-out forwards",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                <style>{`
          @keyframes fillBar {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Header Bar */}
            <section className="bg-card border-b border-border py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to={`/home/cars/${car.id}`}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to {car.name}
                    </Link>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl text-foreground mb-3">
                                Book Your <span className="text-primary">Ride</span>
                            </h1>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                Complete the form below to reserve your vehicle. We'll confirm
                                your booking within minutes.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Booking Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Info */}
                                <ScrollReveal delay={100}>
                                    <div className="bg-card border border-border rounded-lg p-6">
                                        <h3 className="text-xl text-foreground mb-6 flex items-center gap-2">
                                            <User className="w-5 h-5 text-primary" />
                                            Personal Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    htmlFor="booking-name"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="booking-name"
                                                        value={formData.fullName}
                                                        onChange={(e) =>
                                                            handleChange("fullName", e.target.value)
                                                        }
                                                        required
                                                        placeholder="John Smith"
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="booking-email"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="email"
                                                        id="booking-email"
                                                        value={formData.email}
                                                        onChange={(e) =>
                                                            handleChange("email", e.target.value)
                                                        }
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label
                                                    htmlFor="booking-phone"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Phone Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="tel"
                                                        id="booking-phone"
                                                        value={formData.phone}
                                                        onChange={(e) =>
                                                            handleChange("phone", e.target.value)
                                                        }
                                                        required
                                                        placeholder="+1 (555) 123-4567"
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Trip Details */}
                                <ScrollReveal delay={200}>
                                    <div className="bg-card border border-border rounded-lg p-6">
                                        <h3 className="text-xl text-foreground mb-6 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            Trip Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    htmlFor="pickup-location"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Pickup Location *
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="pickup-location"
                                                        value={formData.pickupLocation}
                                                        onChange={(e) =>
                                                            handleChange("pickupLocation", e.target.value)
                                                        }
                                                        required
                                                        placeholder="Airport, Hotel, Address..."
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="dropoff-location"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Drop-off Location *
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="dropoff-location"
                                                        value={formData.dropoffLocation}
                                                        onChange={(e) =>
                                                            handleChange("dropoffLocation", e.target.value)
                                                        }
                                                        required
                                                        placeholder="Airport, Hotel, Address..."
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="pickup-date"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Pickup Date *
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="date"
                                                        id="pickup-date"
                                                        value={formData.pickupDate}
                                                        onChange={(e) =>
                                                            handleChange("pickupDate", e.target.value)
                                                        }
                                                        required
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="pickup-time"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Pickup Time *
                                                </label>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="time"
                                                        id="pickup-time"
                                                        value={formData.pickupTime}
                                                        onChange={(e) =>
                                                            handleChange("pickupTime", e.target.value)
                                                        }
                                                        required
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="dropoff-date"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Drop-off Date *
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="date"
                                                        id="dropoff-date"
                                                        value={formData.dropoffDate}
                                                        onChange={(e) =>
                                                            handleChange("dropoffDate", e.target.value)
                                                        }
                                                        required
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="dropoff-time"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Drop-off Time *
                                                </label>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="time"
                                                        id="dropoff-time"
                                                        value={formData.dropoffTime}
                                                        onChange={(e) =>
                                                            handleChange("dropoffTime", e.target.value)
                                                        }
                                                        required
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Additional Options */}
                                <ScrollReveal delay={300}>
                                    <div className="bg-card border border-border rounded-lg p-6">
                                        <h3 className="text-xl text-foreground mb-6 flex items-center gap-2">
                                            <Car className="w-5 h-5 text-primary" />
                                            Additional Options
                                        </h3>

                                        <div className="space-y-5">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.driverNeeded}
                                                    onChange={(e) =>
                                                        handleChange("driverNeeded", e.target.checked)
                                                    }
                                                    className="w-5 h-5 rounded border-border bg-background checked:bg-primary checked:border-primary"
                                                />
                                                <div>
                                                    <span className="text-foreground group-hover:text-primary transition-colors">
                                                        Professional Driver
                                                    </span>
                                                    <p className="text-muted-foreground text-sm">
                                                        Add an experienced chauffeur for +$50/day
                                                    </p>
                                                </div>
                                            </label>

                                            <div>
                                                <label
                                                    htmlFor="additional-notes"
                                                    className="block text-foreground mb-2 text-sm"
                                                >
                                                    Additional Notes
                                                </label>
                                                <textarea
                                                    id="additional-notes"
                                                    value={formData.additionalNotes}
                                                    onChange={(e) =>
                                                        handleChange("additionalNotes", e.target.value)
                                                    }
                                                    placeholder="Any special requests or requirements..."
                                                    rows={4}
                                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Submit Button */}
                                <ScrollReveal delay={400}>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-all text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        Confirm Booking
                                    </button>
                                    <p className="text-muted-foreground text-sm text-center mt-3 flex items-center justify-center gap-2">
                                        <Shield className="w-4 h-4" />
                                        Secure booking · Free cancellation up to 24h before pickup
                                    </p>
                                </ScrollReveal>
                            </form>
                        </div>

                        {/* Booking Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <ScrollReveal delay={150} direction="right">
                                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                                    <h3 className="text-lg text-foreground mb-4">
                                        Booking Summary
                                    </h3>

                                    {/* Car Preview */}
                                    <div className="relative h-44 rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                                            {car.type}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-muted-foreground text-sm">{car.brand}</p>
                                        <h4 className="text-foreground text-xl">{car.name}</h4>
                                    </div>

                                    <div className="space-y-3 mb-6 py-4 border-y border-border">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">
                                                Daily Rate
                                            </span>
                                            <span className="text-foreground">${car.price}/day</span>
                                        </div>
                                        {formData.driverNeeded && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">
                                                    Driver
                                                </span>
                                                <span className="text-foreground">+$50/day</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Insurance</span>
                                            <span className="text-green-500">Included</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">
                                                Free Cancellation
                                            </span>
                                            <span className="text-green-500">✓</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Starting from</span>
                                        <div className="text-right">
                                            <span className="text-2xl text-foreground">
                                                ${formData.driverNeeded ? car.price + 50 : car.price}
                                            </span>
                                            <span className="text-muted-foreground text-sm">
                                                /day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
