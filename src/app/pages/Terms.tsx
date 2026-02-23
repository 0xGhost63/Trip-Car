import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function Terms() {
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
          <h1 className="text-4xl text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 23, 2026</p>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Tripcar. These Terms and Conditions govern your use of our car rental services.
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">2. Rental Agreement</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When you rent a vehicle from Tripcar, you enter into a binding rental agreement that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Valid driver's license and minimum age requirements (21 years or older)</li>
                <li>Credit card in the renter's name for security deposit</li>
                <li>Insurance coverage as required by local laws</li>
                <li>Agreement to return the vehicle in the same condition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                All rental fees must be paid in advance or at the time of vehicle pickup. We accept major credit
                cards and debit cards. A security deposit may be required and will be returned upon safe return
                of the vehicle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">4. Vehicle Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Renters agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the vehicle only for lawful purposes</li>
                <li>Not allow unauthorized drivers to operate the vehicle</li>
                <li>Maintain the vehicle in good condition</li>
                <li>Report any accidents or damage immediately</li>
                <li>Not use the vehicle for racing, towing, or off-road driving</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-3">5. Insurance & Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Basic insurance is included in all rentals. Additional coverage options are available.
                Renters are responsible for any damage, theft, or loss occurring during the rental period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">6. Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellations made 48 hours or more before the rental start time receive a full refund.
                Cancellations made within 48 hours may incur a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Late Returns</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vehicles must be returned by the agreed time. Late returns may incur additional charges
                at the daily rental rate plus applicable fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tripcar reserves the right to modify these terms at any time. Continued use of our services
                constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at legal@tripcar.com or visit our
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
