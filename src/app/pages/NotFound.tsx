import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl text-primary mb-4">404</h1>
          <h2 className="text-3xl text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/home"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/home/cars"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors border border-border inline-flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Browse Cars
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-muted-foreground mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/home/about" className="text-primary hover:text-primary/80">About Us</Link>
            <span className="text-border">•</span>
            <Link to="/home/help" className="text-primary hover:text-primary/80">Help Center</Link>
            <span className="text-border">•</span>
            <Link to="/home/contact" className="text-primary hover:text-primary/80">Contact</Link>
            <span className="text-border">•</span>
            <Link to="/home/blog" className="text-primary hover:text-primary/80">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
