import { Link, useLocation } from "react-router";
import { Car, Menu, X, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/home/about" },
    { name: "Cars", path: "/home/cars" },
    { name: "Driver", path: "/home/driver" },
    { name: "Blog", path: "/home/blog" },
    { name: "Help Center", path: "/home/help" },
    { name: "Contact", path: "/home/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/home") return location.pathname === "/home";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl text-foreground tracking-tight">
              Trip<span className="text-primary">car</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-colors ${isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Login
            </Link>
            <Link
              to="/home/cars"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Rent Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-colors ${isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block mx-4 mt-4 border border-primary text-primary px-6 py-3 rounded-md text-center hover:bg-primary/10 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/home/cars"
              onClick={() => setMobileMenuOpen(false)}
              className="block mx-4 mt-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-center hover:bg-primary/90 transition-colors"
            >
              Rent Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}