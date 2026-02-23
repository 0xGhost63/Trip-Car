import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Booking",
    question: "How do I book a car?",
    answer: "You can book a car through our website by selecting your desired vehicle, choosing your rental dates, and completing the booking form. Alternatively, you can call our customer service team for assistance."
  },
  {
    category: "Booking",
    question: "Can I modify or cancel my reservation?",
    answer: "Yes, you can modify or cancel your reservation up to 24 hours before your scheduled pickup time without any charges. Contact our support team or use your booking confirmation to make changes."
  },
  {
    category: "Booking",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal for online bookings. A valid credit card is required for security deposit purposes."
  },
  {
    category: "Requirements",
    question: "What are the rental requirements?",
    answer: "You must be at least 25 years old with a valid driver's license held for a minimum of 2 years. International customers need a valid passport and international driving permit."
  },
  {
    category: "Requirements",
    question: "Do I need insurance?",
    answer: "All our vehicles come with comprehensive insurance coverage. Additional coverage options are available at checkout for extra peace of mind."
  },
  {
    category: "Vehicles",
    question: "Are the cars well-maintained?",
    answer: "Absolutely! All our vehicles undergo regular maintenance and thorough inspections before each rental to ensure they meet our high safety and quality standards."
  },
  {
    category: "Vehicles",
    question: "Can I request a specific vehicle?",
    answer: "Yes, you can request a specific vehicle when booking. While we'll do our best to accommodate your request, availability depends on the rental dates and current fleet status."
  },
  {
    category: "Pricing",
    question: "Are there any hidden fees?",
    answer: "No hidden fees! All costs are clearly displayed during the booking process, including rental rate, insurance, taxes, and any optional add-ons you select."
  },
  {
    category: "Pricing",
    question: "Do you offer long-term rental discounts?",
    answer: "Yes, we offer attractive discounts for weekly and monthly rentals. Contact our sales team for customized long-term rental packages."
  },
  {
    category: "Service",
    question: "Is delivery and pickup available?",
    answer: "Yes, we offer complimentary delivery and pickup within the city limits. Additional charges apply for locations outside our standard service area."
  },
  {
    category: "Service",
    question: "What if I have an issue during my rental?",
    answer: "Our 24/7 customer support team is always available to assist you. You can reach us via phone, email, or through the emergency contact number provided with your rental."
  }
];

export function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-foreground mb-4">
            Help <span className="text-primary">Center</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to frequently asked questions or contact our support team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-input-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-foreground pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No results found. Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8 text-center">
            Need More <span className="text-primary">Help?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-foreground text-xl mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our support team
              </p>
              <p className="text-primary">+1 (555) 123-4567</p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-foreground text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us a detailed message
              </p>
              <p className="text-primary">support@tripcar.com</p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-foreground text-xl mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant support online
              </p>
              <button className="text-primary hover:text-primary/80">Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <a
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
