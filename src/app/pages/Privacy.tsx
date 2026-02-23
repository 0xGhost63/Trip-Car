import { Link } from "react-router";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Bell } from "lucide-react";

export function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8">
          <h1 className="text-4xl text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 23, 2026</p>

          <div className="space-y-6 text-foreground">
            <section>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">1. Information We Collect</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Personal information (name, email, phone number, address)</li>
                <li>Driver's license and payment information</li>
                <li>Rental history and preferences</li>
                <li>Communication records with our customer service</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">2. How We Use Your Information</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Processing and managing your car rental bookings</li>
                <li>Verifying driver eligibility and identity</li>
                <li>Processing payments and preventing fraud</li>
                <li>Sending booking confirmations and updates</li>
                <li>Improving our services and customer experience</li>
                <li>Marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">3. Information Sharing</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Service providers who assist in our operations</li>
                <li>Insurance companies as required for coverage</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">4. Data Security</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction. All payment information is
                encrypted and processed through secure payment gateways.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">5. Your Rights</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <Bell className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">6. Cookies & Tracking</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience,
                analyze site traffic, and understand user behavior. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this policy, comply with legal obligations, resolve disputes, and enforce
                our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically. We will notify you of any significant
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or our data practices, please contact us at
                privacy@tripcar.com or visit our
                <Link to="/contact" className="text-primary hover:text-primary/80 ml-1">
                  Contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
