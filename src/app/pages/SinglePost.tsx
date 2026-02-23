import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "../data/mockData";

export function SinglePost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-foreground mb-4">Post not found</h2>
          <Link to="/home/blog" className="text-primary hover:text-primary/80">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="bg-background">
      {/* Back Button */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/home/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl sm:text-5xl text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="text-muted-foreground space-y-4 mb-8">
              <p>{post.content}</p>
              <p>
                In today's luxury car rental market, discerning customers expect more than just a vehicle - they seek an experience. Whether you're planning a special occasion, a business trip, or simply want to enjoy the thrill of driving a high-performance vehicle, understanding what makes each car unique is essential.
              </p>
              <p>
                From the raw power of Italian supercars to the refined elegance of German luxury sedans, each vehicle in our fleet has been carefully selected to meet the highest standards of performance, comfort, and style. Our team of automotive experts continuously evaluates the latest models to ensure we offer the most sought-after vehicles in the market.
              </p>
              <h2 className="text-2xl text-foreground mt-8 mb-4">Key Considerations</h2>
              <p>
                When selecting a luxury rental car, consider factors such as the occasion, number of passengers, luggage requirements, and the type of driving experience you desire. Sports cars offer exhilarating performance, while luxury sedans provide unmatched comfort for longer journeys.
              </p>
              <p>
                Our concierge team is always available to help you make the perfect choice based on your specific needs and preferences. We pride ourselves on matching each customer with their ideal vehicle, ensuring a memorable and satisfying experience.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-b border-border py-8 my-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-foreground">
                <Share2 className="w-5 h-5" />
                <span>Share this article</span>
              </div>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-foreground text-lg mb-2">About {post.author}</h3>
                <p className="text-muted-foreground text-sm">
                  Automotive enthusiast and luxury car expert with years of experience in the premium vehicle rental industry. Passionate about sharing insights and knowledge with fellow car lovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-foreground mb-8">
              Related <span className="text-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/home/blog/${relatedPost.id}`}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
