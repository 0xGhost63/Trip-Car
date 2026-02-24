import { useState } from "react";
import { useParams, Link } from "react-router";
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
    Wallet,
    Navigation,
    Timer,
} from "lucide-react";
import { cars } from "../data/mockData";
import { ScrollReveal } from "../components/ScrollReveal";

const VisaIcon = () => (
    <svg viewBox="0 0 48 16" className="w-12 h-5" aria-label="Visa">
        <rect width="48" height="16" rx="3" fill="#1A1F71" />
        <text x="7" y="12.5" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="white" letterSpacing="1">VISA</text>
    </svg>
);

const MasterCardIcon = () => (
    <svg viewBox="0 0 38 24" className="w-10 h-6" aria-label="MasterCard">
        <circle cx="14" cy="12" r="10" fill="#EB001B" />
        <circle cx="24" cy="12" r="10" fill="#F79E1B" />
        <path d="M19 5.27a10 10 0 0 1 0 13.46A10 10 0 0 1 19 5.27z" fill="#FF5F00" />
    </svg>
);

const AmexIcon = () => (
    <svg viewBox="0 0 48 16" className="w-12 h-5" aria-label="American Express">
        <rect width="48" height="16" rx="3" fill="#2E77BC" />
        <text x="24" y="11" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="9" fill="white" textAnchor="middle" letterSpacing="1.5">AMEX</text>
    </svg>
);

const DebitCardIcon = () => (
    <svg viewBox="0 0 38 24" className="w-10 h-6" fill="none" aria-label="Debit Card">
        <rect width="38" height="24" rx="3" fill="#374151" />
        <rect x="4" y="7" width="8" height="6" rx="1" fill="#F59E0B" />
        <rect x="4" y="15" width="22" height="2" rx="1" fill="#6B7280" />
        <rect x="4" y="19" width="14" height="2" rx="1" fill="#6B7280" />
    </svg>
);

const PayPalIcon = () => (
    <svg viewBox="0 0 48 16" className="w-12 h-5" aria-label="PayPal">
        <rect width="48" height="16" rx="3" fill="#003087" />
        <text x="6" y="11.5" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#009CDE">Pay</text>
        <text x="20" y="11.5" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="white">Pal</text>
    </svg>
);

const PAYMENT_METHODS = [
    { id: "visa", label: "Visa", Icon: VisaIcon },
    { id: "mastercard", label: "MasterCard", Icon: MasterCardIcon },
    { id: "amex", label: "American Express", Icon: AmexIcon },
    { id: "debit", label: "Debit Card", Icon: DebitCardIcon },
    { id: "paypal", label: "PayPal", Icon: PayPalIcon },
];

const PICKUP_LOCATIONS = [
    "Downtown City Center",
    "International Airport",
    "Grand Hotel Plaza",
    "Central Train Station",
    "Shopping Mall District",
];

interface ConfirmationInfo {
    carArrivalMins: number;
    destArrivalMins: number;
    locations: string[];
    paymentMethod: string;
}

export function Booking() {
    const { id } = useParams();
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
        paymentMethod: "visa",
    });

    const [confirmation, setConfirmation] = useState<ConfirmationInfo | null>(null);

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const carArrivalMins = Math.floor(Math.random() * 11) + 5; // 5–15 mins
        const destArrivalMins = carArrivalMins + Math.floor(Math.random() * 16) + 10; // +10–25 mins
        const paymentLabel =
            PAYMENT_METHODS.find((m) => m.id === formData.paymentMethod)?.label ?? formData.paymentMethod;
        setConfirmation({
            carArrivalMins,
            destArrivalMins,
            locations: PICKUP_LOCATIONS,
            paymentMethod: paymentLabel,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
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

    /* ────────────────── CONFIRMATION SCREEN ────────────────── */
    if (confirmation) {
        return (
            <div className="bg-background min-h-screen py-16 px-4">
                <div className="max-w-2xl mx-auto">
                    <ScrollReveal>
                        {/* Success badge */}
                        <div className="text-center mb-10">
                            <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <CheckCircle className="w-12 h-12 text-primary" />
                            </div>
                            <h1 className="text-4xl text-foreground mb-3">
                                Booking <span className="text-primary">Confirmed!</span>
                            </h1>
                            <p className="text-muted-foreground">
                                Your reservation for the{" "}
                                <span className="text-primary font-medium">{car.name}</span> has been
                                received. A confirmation will be sent to{" "}
                                <span className="text-foreground">{formData.email}</span>.
                            </p>
                        </div>

                        {/* Arrival times */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                    <Timer className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm mb-1">
                                        Estimated Car Arrival
                                    </p>
                                    <p className="text-3xl text-foreground font-semibold">
                                        {confirmation.carArrivalMins}{" "}
                                        <span className="text-lg text-muted-foreground font-normal">
                                            mins
                                        </span>
                                    </p>
                                    <p className="text-muted-foreground text-xs mt-1">
                                        Driver is on the way to your pickup point
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                    <Navigation className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm mb-1">
                                        Estimated Arrival at Destination
                                    </p>
                                    <p className="text-3xl text-foreground font-semibold">
                                        {confirmation.destArrivalMins}{" "}
                                        <span className="text-lg text-muted-foreground font-normal">
                                            mins
                                        </span>
                                    </p>
                                    <p className="text-muted-foreground text-xs mt-1">
                                        Based on current traffic conditions
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Booking summary card */}
                        <div className="bg-card border border-border rounded-xl p-6 mb-6">
                            <h3 className="text-foreground text-lg mb-5 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" />
                                Booking Summary
                            </h3>

                            <div className="flex gap-4 mb-5 pb-5 border-b border-border">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-24 h-16 object-cover rounded-lg shrink-0"
                                />
                                <div>
                                    <p className="text-muted-foreground text-sm">{car.brand}</p>
                                    <p className="text-foreground text-lg">{car.name}</p>
                                    <p className="text-primary text-sm">
                                        ${formData.driverNeeded ? car.price + 50 : car.price}/day
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Name:</span>
                                    <span className="text-foreground">{formData.fullName}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CreditCard className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Payment:</span>
                                    <span className="text-foreground">{confirmation.paymentMethod}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Pickup:</span>
                                    <span className="text-foreground truncate">{formData.pickupLocation}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Drop-off:</span>
                                    <span className="text-foreground truncate">{formData.dropoffLocation}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Date:</span>
                                    <span className="text-foreground">{formData.pickupDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-muted-foreground">Time:</span>
                                    <span className="text-foreground">{formData.pickupTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Available pickup locations */}
                        <div className="bg-card border border-border rounded-xl p-6 mb-8">
                            <h3 className="text-foreground text-lg mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                Available Pickup Locations
                            </h3>
                            <div className="space-y-2">
                                {confirmation.locations.map((loc, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-muted-foreground text-sm"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                        {loc}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/home"
                                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg text-center hover:bg-primary/90 transition-colors"
                            >
                                Back to Home
                            </Link>
                            <Link
                                to="/home/cars"
                                className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg text-center hover:bg-secondary/80 transition-colors border border-border"
                            >
                                Browse More Cars
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        );
    }

    /* ────────────────── BOOKING FORM ────────────────── */
    const daysCount = (() => {
        if (formData.pickupDate && formData.dropoffDate) {
            const diff =
                (new Date(formData.dropoffDate).getTime() - new Date(formData.pickupDate).getTime()) /
                86400000;
            return diff > 0 ? Math.ceil(diff) : 1;
        }
        return 1;
    })();

    const dailyRate = formData.driverNeeded ? car.price + 50 : car.price;
    const totalEstimate = dailyRate * daysCount;

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
                                Fill in your details, choose your payment method, and we'll confirm
                                your booking within minutes.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* ── Main Form ── */}
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
                                                <label htmlFor="booking-name" className="block text-foreground mb-2 text-sm">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="booking-name"
                                                        value={formData.fullName}
                                                        onChange={(e) => handleChange("fullName", e.target.value)}
                                                        placeholder="John Smith"
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="booking-email" className="block text-foreground mb-2 text-sm">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="email"
                                                        id="booking-email"
                                                        value={formData.email}
                                                        onChange={(e) => handleChange("email", e.target.value)}
                                                        placeholder="john@example.com"
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="booking-phone" className="block text-foreground mb-2 text-sm">
                                                    Phone Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="tel"
                                                        id="booking-phone"
                                                        value={formData.phone}
                                                        onChange={(e) => handleChange("phone", e.target.value)}
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
                                                <label htmlFor="pickup-location" className="block text-foreground mb-2 text-sm">
                                                    Pickup Location *
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="pickup-location"
                                                        value={formData.pickupLocation}
                                                        onChange={(e) => handleChange("pickupLocation", e.target.value)}
                                                        placeholder="Airport, Hotel, Address..."
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="dropoff-location" className="block text-foreground mb-2 text-sm">
                                                    Drop-off Location *
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="text"
                                                        id="dropoff-location"
                                                        value={formData.dropoffLocation}
                                                        onChange={(e) => handleChange("dropoffLocation", e.target.value)}
                                                        placeholder="Airport, Hotel, Address..."
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="pickup-date" className="block text-foreground mb-2 text-sm">
                                                    Pickup Date *
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="date"
                                                        id="pickup-date"
                                                        value={formData.pickupDate}
                                                        onChange={(e) => handleChange("pickupDate", e.target.value)}
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="pickup-time" className="block text-foreground mb-2 text-sm">
                                                    Pickup Time *
                                                </label>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="time"
                                                        id="pickup-time"
                                                        value={formData.pickupTime}
                                                        onChange={(e) => handleChange("pickupTime", e.target.value)}
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="dropoff-date" className="block text-foreground mb-2 text-sm">
                                                    Drop-off Date *
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="date"
                                                        id="dropoff-date"
                                                        value={formData.dropoffDate}
                                                        onChange={(e) => handleChange("dropoffDate", e.target.value)}
                                                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="dropoff-time" className="block text-foreground mb-2 text-sm">
                                                    Drop-off Time *
                                                </label>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="time"
                                                        id="dropoff-time"
                                                        value={formData.dropoffTime}
                                                        onChange={(e) => handleChange("dropoffTime", e.target.value)}
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
                                                    onChange={(e) => handleChange("driverNeeded", e.target.checked)}
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
                                                <label htmlFor="additional-notes" className="block text-foreground mb-2 text-sm">
                                                    Additional Notes
                                                </label>
                                                <textarea
                                                    id="additional-notes"
                                                    value={formData.additionalNotes}
                                                    onChange={(e) => handleChange("additionalNotes", e.target.value)}
                                                    placeholder="Any special requests or requirements..."
                                                    rows={3}
                                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* ── Payment Method ── */}
                                <ScrollReveal delay={400}>
                                    <div className="bg-card border border-border rounded-lg p-6">
                                        <h3 className="text-xl text-foreground mb-6 flex items-center gap-2">
                                            <Wallet className="w-5 h-5 text-primary" />
                                            Payment Method
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                            {PAYMENT_METHODS.map((method) => {
                                                const selected = formData.paymentMethod === method.id;
                                                return (
                                                    <label
                                                        key={method.id}
                                                        className={`flex items-center gap-3 cursor-pointer rounded-lg border-2 px-4 py-3 transition-all duration-200 ${selected
                                                            ? "border-primary bg-primary/10"
                                                            : "border-border bg-background hover:border-primary/50"
                                                            }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value={method.id}
                                                            checked={selected}
                                                            onChange={() => handleChange("paymentMethod", method.id)}
                                                            className="sr-only"
                                                        />
                                                        <method.Icon />
                                                        <span
                                                            className={`text-sm font-medium ${selected ? "text-primary" : "text-foreground"
                                                                }`}
                                                        >
                                                            {method.label}
                                                        </span>
                                                        {selected && (
                                                            <CheckCircle className="w-4 h-4 text-primary ml-auto" />
                                                        )}
                                                    </label>
                                                );
                                            })}
                                        </div>

                                        {/* Card details placeholder (only for card methods) */}
                                        {["visa", "mastercard", "amex", "debit"].includes(formData.paymentMethod) && (
                                            <div className="mt-5 space-y-4">
                                                <div>
                                                    <label htmlFor="card-number" className="block text-foreground mb-2 text-sm">
                                                        Card Number
                                                    </label>
                                                    <div className="relative">
                                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                        <input
                                                            type="text"
                                                            id="card-number"
                                                            placeholder="1234  5678  9012  3456"
                                                            maxLength={19}
                                                            className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors tracking-widest"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="card-expiry" className="block text-foreground mb-2 text-sm">
                                                            Expiry Date
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="card-expiry"
                                                            placeholder="MM / YY"
                                                            maxLength={7}
                                                            className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="card-cvv" className="block text-foreground mb-2 text-sm">
                                                            CVV
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="card-cvv"
                                                            placeholder="•••"
                                                            maxLength={4}
                                                            className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {formData.paymentMethod === "paypal" && (
                                            <div className="mt-5 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center gap-3">
                                                <span className="text-2xl">🅿️</span>
                                                <p className="text-muted-foreground text-sm">
                                                    You'll be redirected to PayPal to complete your payment
                                                    after confirming the booking.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>

                                {/* Submit */}
                                <ScrollReveal delay={500}>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-all text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Confirm Booking &amp; Request Pickup
                                    </button>
                                    <p className="text-muted-foreground text-sm text-center mt-3 flex items-center justify-center gap-2">
                                        <Shield className="w-4 h-4" />
                                        Secure booking · Free cancellation up to 24h before pickup
                                    </p>
                                </ScrollReveal>
                            </form>
                        </div>

                        {/* ── Sidebar Summary ── */}
                        <div className="lg:col-span-1">
                            <ScrollReveal delay={150} direction="right">
                                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                                    <h3 className="text-lg text-foreground mb-4">Booking Summary</h3>

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
                                            <span className="text-muted-foreground">Daily Rate</span>
                                            <span className="text-foreground">${car.price}/day</span>
                                        </div>
                                        {formData.driverNeeded && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Driver</span>
                                                <span className="text-foreground">+$50/day</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Duration</span>
                                            <span className="text-foreground">{daysCount} day{daysCount !== 1 ? "s" : ""}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Insurance</span>
                                            <span className="text-green-500">Included</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Free Cancellation</span>
                                            <span className="text-green-500">✓</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">
                                            {formData.pickupDate && formData.dropoffDate ? "Total Estimate" : "Starting from"}
                                        </span>
                                        <div className="text-right">
                                            <span className="text-2xl text-foreground">${totalEstimate}</span>
                                            {formData.pickupDate && formData.dropoffDate ? (
                                                <span className="text-muted-foreground text-xs block">for {daysCount} day{daysCount !== 1 ? "s" : ""}</span>
                                            ) : (
                                                <span className="text-muted-foreground text-sm">/day</span>
                                            )}
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
