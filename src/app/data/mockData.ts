export interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  year: number;
  seats: number;
  transmission: string;
  fuel: string;
  price: number;
  image: string;
  features: string[];
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  experience: number;
  rating: number;
  languages: string[];
  image: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Ferrari 488 GTB",
    brand: "Ferrari",
    type: "Sports Car",
    year: 2024,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 850,
    image: "https://images.unsplash.com/photo-1597687154732-9b205f4f5c1c?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["GPS Navigation", "Bluetooth", "Premium Sound", "Sport Mode", "Carbon Fiber Interior"],
    description: "Experience the thrill of Italian engineering with the Ferrari 488 GTB. This supercar combines stunning performance with elegant design."
  },
  {
    id: "2",
    name: "Mercedes S-Class",
    brand: "Mercedes-Benz",
    type: "Luxury Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 450,
    image: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Massage Seats", "Air Suspension", "Panoramic Roof", "Advanced Safety", "Premium Leather"],
    description: "The ultimate luxury sedan offering unparalleled comfort and cutting-edge technology for your journey."
  },
  {
    id: "3",
    name: "Range Rover Sport",
    brand: "Land Rover",
    type: "SUV",
    year: 2024,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 550,
    image: "https://images.unsplash.com/photo-1768965468579-50f5cbef70a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHN1diUyMGx1eHVyeSUyMHZlaGljbGV8ZW58MXx8fHwxNzcxNTczMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["4WD", "Off-Road Package", "Premium Audio", "Climate Control", "Towing Capacity"],
    description: "Powerful and luxurious SUV perfect for family trips or adventurous off-road experiences."
  },
  {
    id: "4",
    name: "Porsche 911 Cabriolet",
    brand: "Porsche",
    type: "Convertible",
    year: 2024,
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 720,
    image: "https://images.unsplash.com/photo-1593353798398-6024b7444bb6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Retractable Roof", "Sport Exhaust", "Adaptive Suspension", "Premium Interior", "Track Mode"],
    description: "Feel the wind in your hair with this iconic convertible sports car that delivers pure driving pleasure."
  },
  {
    id: "5",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    type: "Electric Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    price: 600,
    image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Autopilot", "Fast Charging", "Gaming Console", "HEPA Filter", "Premium Sound"],
    description: "The fastest accelerating production car with zero emissions. Experience the future of driving today."
  },
  {
    id: "6",
    name: "BMW 7 Series",
    brand: "BMW",
    type: "Luxury Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 480,
    image: "https://images.unsplash.com/photo-1764605206511-7a649d9df63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNlZGFuJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc3MTQ4Njg5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Executive Lounge Seating", "Gesture Control", "Night Vision", "Laser Lights", "WiFi Hotspot"],
    description: "The pinnacle of German engineering, combining performance, luxury, and innovative technology."
  },
  {
    id: "7",
    name: "BMW M5 CS",
    brand: "BMW",
    type: "Performance Sedan",
    year: 2024,
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 780,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: ["M Power Engine", "Carbon Fiber Trim", "Sport Suspension", "Premium Leather", "Advanced Infotainment"],
    description: "The ultimate performance sedan with a lightweight carbon fiber body and a 625 hp engine for exhilarating drives."
  },
  {
    id: "8",
    name: "Bentley Continental GT",
    brand: "Bentley",
    type: "Luxury Coupe",
    year: 2024,
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 950,
    image: "https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["W12 Engine", "Handcrafted Interior", "Dynamic Ride Control", "Advanced Safety", "Premium Audio"],
    description: "A masterpiece of luxury and performance, offering a refined driving experience with a powerful W12 engine."
  },
];

export const drivers: Driver[] = [
  {
    id: "1",
    name: "James Anderson",
    experience: 12,
    rating: 4.9,
    languages: ["English", "Spanish", "French"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bio: "Professional chauffeur with over a decade of experience providing premium transportation services. Specialized in corporate clients and VIP events."
  },
  {
    id: "2",
    name: "Michael Chen",
    experience: 8,
    rating: 4.8,
    languages: ["English", "Mandarin", "Cantonese"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bio: "Certified professional driver with extensive knowledge of city routes and tourist destinations. Known for punctuality and excellent customer service."
  },
  {
    id: "3",
    name: "Sarah Williams",
    experience: 10,
    rating: 5.0,
    languages: ["English", "German", "Italian"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bio: "Executive driver specializing in luxury vehicle operations. Background in hospitality ensures a premium experience for all passengers."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Luxury Cars to Rent in 2024",
    excerpt: "Discover the most sought-after luxury vehicles available for rental this year.",
    content: "When it comes to luxury car rentals, 2024 brings an impressive lineup of vehicles that combine performance, comfort, and cutting-edge technology...",
    author: "Emily Rodriguez",
    date: "2026-02-15",
    image: "https://images.unsplash.com/photo-1751336620135-21dd3a074b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzcxNTczMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Car Reviews"
  },
  {
    id: "2",
    title: "How to Choose the Perfect Rental Car",
    excerpt: "A comprehensive guide to selecting the right vehicle for your needs.",
    content: "Choosing the perfect rental car involves considering several factors including your travel purpose, number of passengers, luggage space, and budget...",
    author: "David Thompson",
    date: "2026-02-10",
    image: "https://images.unsplash.com/photo-1768965468579-50f5cbef70a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHN1diUyMGx1eHVyeSUyMHZlaGljbGV8ZW58MXx8fHwxNzcxNTczMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Travel Tips"
  },
  {
    id: "3",
    title: "Electric vs Hybrid: Which is Right for You?",
    excerpt: "Understanding the differences between electric and hybrid rental vehicles.",
    content: "As eco-friendly vehicles become more popular, many renters wonder whether to choose an electric or hybrid car. Each option has its advantages...",
    author: "Lisa Johnson",
    date: "2026-02-05",
    image: "https://images.unsplash.com/photo-1694676518486-3cd13e7447d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMG1vZGVybnxlbnwxfHx8fDE3NzE1NDYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sustainability"
  }
];
