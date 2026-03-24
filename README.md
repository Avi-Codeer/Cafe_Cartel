# Cafe The Cartel

A high-end, single-page interactive website for **Cafe The Cartel** — a premium café on Fraser Road Area, Patna.

## Live Preview

[cafethecartel.com](https://cafe-cartel.vercel.app) *(deploy to your preferred platform)*

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — scroll-reveal animations & parallax
- **Lucide React** — icons

## Features

- 🌑 **Dark Mode** aesthetic with gold/brass (`#c9a84c`) accents
- 🎬 **Cinematic** scroll-reveal animations
- 📱 **Fully Responsive** — Mobile + Desktop
- ⚡ **Hero Section** — Parallax background, "The Cartel Experience" heading, Book a Table CTA
- 🍛 **Cuisines Grid** — 6 interactive cards (North Indian, Continental, Italian, Biryani, Salads, Desserts)
- 🛋️ **Amenities** — Icon-based grid (Work-friendly, Smoking area, Free parking, Indoor/Outdoor seating, Family-friendly, and more)
- 📖 **Menu Preview** — 13-page curated menu, avg ₹1,000 for two
- 📲 **Floating Action Bar** (mobile only) — Call Us & WhatsApp buttons
- 🗺️ **Footer** — Google Maps embed + contact details

## Contact

- 📞 [+91 99733 55555](tel:+919973355555)
- 💬 [WhatsApp](https://wa.me/919973355555?text=I'd%20like%20to%20reserve%20a%20table)
- 📍 Fraser Road Area, Patna, Bihar 800001

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed top navigation with mobile menu
│   ├── Hero.jsx         # Full-screen hero with parallax
│   ├── Cuisines.jsx     # 6-card cuisine grid
│   ├── MenuPreview.jsx  # Menu stats + 13 chapter list
│   ├── Amenities.jsx    # 8-item amenities grid
│   ├── Footer.jsx       # Maps embed + contact info
│   └── FloatingBar.jsx  # Mobile fixed Call/WhatsApp bar
├── App.jsx
├── main.jsx
└── index.css            # Tailwind v4 + custom utilities
```
