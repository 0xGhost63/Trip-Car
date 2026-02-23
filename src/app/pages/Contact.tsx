import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need assistance? Our dedicated team is ready to help you find the perfect vehicle and ensure your rental experience is exceptional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Avenue<br />
                      Downtown, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +1 (555) 123-4567<br />
                      Emergency: +1 (555) 765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@tripcar.com<br />
                      Support: support@tripcar.com<br />
                      Sales: sales@tripcar.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM<br />
                      <span className="text-primary">24/7 Emergency Support</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  >
                    <option>General Inquiry</option>
                    <option>Booking Question</option>
                    <option>Vehicle Information</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8 text-center">
            Visit Our <span className="text-primary">Showroom</span>
          </h2>
          <div className="bg-secondary/20 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder - 123 Luxury Avenue, Downtown, NY 10001</p>
          </div>
        </div>
      </section>

      {/* Additional Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-8 text-center">
            Our <span className="text-primary">Locations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-foreground text-xl mb-3">New York</h3>
              <p className="text-muted-foreground text-sm mb-2">123 Luxury Avenue</p>
              <p className="text-muted-foreground text-sm mb-4">Downtown, NY 10001</p>
              <p className="text-primary">+1 (555) 123-4567</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-foreground text-xl mb-3">Los Angeles</h3>
              <p className="text-muted-foreground text-sm mb-2">456 Sunset Boulevard</p>
              <p className="text-muted-foreground text-sm mb-4">Beverly Hills, CA 90210</p>
              <p className="text-primary">+1 (555) 234-5678</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-foreground text-xl mb-3">Miami</h3>
              <p className="text-muted-foreground text-sm mb-2">789 Ocean Drive</p>
              <p className="text-muted-foreground text-sm mb-4">South Beach, FL 33139</p>
              <p className="text-primary">+1 (555) 345-6789</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
