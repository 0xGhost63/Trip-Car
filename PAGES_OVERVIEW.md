# Tripcar — Pages Overview

> A quick reference guide to all pages included in the **Tripcar** luxury car rental website.
> The site uses a dark, premium aesthetic throughout — featuring dark backgrounds, amber/gold primary accents, subtle borders, and smooth scroll-reveal animations.

---

## 🔐 Authentication Pages

### 1. Login — `/`
The entry point of the application. Users enter their email and password to access the platform, with a "Remember me" option and a password visibility toggle. A **"Continue as Guest"** button is also available for quick access without signing up.

---

### 2. Signup — `/signup`
The registration page where new users create an account by filling in their full name, email, phone number, password, and confirming their password. It validates passwords match before submission and redirects to the homepage upon success.

---

### 3. Forgot Password — `/forgot-password`
A simple recovery page where users enter their registered email address to request a password reset link. It provides a clean, minimal form experience consistent with the login/signup theme.

---

## 🏠 Main Application Pages (under `/home`)

### 4. Homepage — `/home`
The main landing page of the site. It features a hero section with a headline and CTA, a showcase of featured cars, trust/feature highlights (24/7 support, free cancellation, etc.), customer reviews/testimonials, and a "Why Choose Us" section — all designed to build trust and drive bookings.

---

### 5. Car List — `/home/cars`
The full fleet browsing page. It displays all available vehicles in a responsive grid layout and includes live filtering by **car type** (Sports, SUV, Sedan, etc.), **price range**, and a **search bar** by name or brand. Shows a count of how many vehicles match the current filters.

---

### 6. Car Details — `/home/cars/:id`
A dedicated detail page for each individual car. It shows the car's photo, brand, name, description, key specs (seats, transmission, fuel type, year), a full feature list, and the daily rental price. Ends with a **"Book Now"** button and a "Similar Vehicles" section at the bottom.

---

### 7. Booking — `/home/cars/:id/book`
The full booking and checkout page. Users fill in personal information (name, email, phone), trip details (pickup/drop-off location, dates, times), and optionally add a professional driver. Payment is handled inline with support for **Visa, MasterCard, American Express, Debit Card, and PayPal**. On submission, a **confirmation screen** appears showing estimated car arrival time and destination ETA — no page navigation needed.

---

### 8. Driver — `/home/driver`
The professional drivers directory page. It showcases Tripcar's team of licensed chauffeurs with their profile photo, name, years of experience, star rating, languages spoken, and a short bio. Designed to give users confidence when opting for a professional driver.

---

### 9. Blog — `/home/blog`
The blog/articles hub. Features a large **"Featured Post"** banner at the top, followed by a grid of all articles below. Each post shows a cover image, category badge, title, excerpt, author, and date. Also includes a **"Browse by Category"** section and a **newsletter subscription** form.

---

### 10. Single Blog Post — `/home/blog/:id`
The full article reader page for an individual blog post. Displays the post's cover image, title, author info, publish date, and the full article content. Likely also links back to the Blog listing page.

---

### 11. About — `/home/about`
The brand story and company information page. Split into sections: **Our Story** (founded 2011), **Core Values** (Excellence, Customer Focus, Quality, Passion), **Mission & Vision** statements, and **By the Numbers** stats (15+ years, 500+ vehicles, 10K+ customers, 50+ drivers). Uses a hero image banner at the top.

---

### 12. Contact — `/home/contact`
The customer support and contact page. Contains a contact form (name, email, subject, message) alongside displayed contact details — physical address, phone number, email, and business hours. Built for users who need direct assistance.

---

### 13. Help Center — `/home/help`
A searchable FAQ page. Users can search for answers or browse questions organized by category. Each FAQ item is an accordion-style expandable card showing the question and its answer. Covers common topics like booking, cancellation, payment, and vehicle policies.

---

## 📄 Legal Pages

### 14. Terms & Conditions — `/home/terms`
A formatted legal document outlining Tripcar's rental agreement policies. Covers sections on: Rental Agreement, Payment Terms, Vehicle Use restrictions, Insurance & Liability, Cancellation Policy, and Late Return fees. Presented in clean, readable card layout.

---

### 15. Privacy Policy — `/home/privacy`
The data privacy disclosure page. Explains what personal information is collected, how it is used, who it is shared with, how it is secured, and what rights users have. Each section is accompanied by a relevant icon for easy scanning.

---

## ⚠️ Utility Pages

### 16. Not Found — `/home/*`
A 404 fallback page shown when a user navigates to a route that doesn't exist within the `/home` section. Provides a friendly error message and a way to navigate back.

---

### 17. Pickup *(Legacy/Unused)* — `Pickup.tsx`
A leftover page from an earlier version of the booking flow. Its functionality was fully merged into the **Booking** page (`/home/cars/:id/book`), so this file is no longer used in routing.

---

*Document generated: February 25, 2026*
