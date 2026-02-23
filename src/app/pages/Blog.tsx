import { Link } from "react-router";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/mockData";

export function Blog() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-foreground mb-4">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground">
            Latest news, tips, and insights from the world of luxury car rentals
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/home/blog/${blogPosts[0].id}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
          >
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                Featured
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4 w-fit">
                {blogPosts[0].category}
              </div>
              <h2 className="text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary">
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8">
            Recent <span className="text-primary">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/home/blog/${post.id}`}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8 text-center">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Car Reviews", "Travel Tips", "Sustainability", "Maintenance", "Industry News", "Driving Guides", "Luxury Lifestyle", "Events"].map((category) => (
              <button
                key={category}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-foreground mb-4">
            Subscribe to Our <span className="text-primary">Newsletter</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles, tips, and exclusive offers delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
