# Wrespo.ai Website

High-converting website for Wrespo.ai - an AI consulting firm specializing in helping B2C service businesses automate customer engagement and increase revenue.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Forms:** React Hook Form
- **Animations:** Framer Motion

## Features

- ✅ Fully responsive, mobile-first design
- ✅ Interactive ROI Calculator (real-time calculations)
- ✅ Multiple homepage sections with smooth scrolling
- ✅ Contact form with validation
- ✅ Case studies pages
- ✅ FAQ accordion
- ✅ SEO optimized
- ✅ Fast loading (<2s initial load target)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app                    # Next.js app directory
  /about               # About page
  /contact             # Contact page
  /case-studies        # Case studies pages
  /thank-you           # Thank you page
  layout.tsx           # Root layout
  page.tsx             # Homepage
  globals.css          # Global styles
/components            # React components
  /ui                  # Reusable UI components
  Header.tsx           # Site header
  Footer.tsx           # Site footer
  ROICalculator.tsx    # Interactive ROI calculator
  [Section]Section.tsx # Homepage sections
/lib                   # Utility functions
  utils.ts             # Helper functions
  calculations.ts      # ROI calculation logic
/public                # Static assets
```

## Key Pages

- **Homepage (/)** - Full landing page with 12 sections including Hero, ROI Calculator, Problem/Solution, Testimonials, Pricing, FAQ, etc.
- **About (/about)** - Company story and approach
- **Contact (/contact)** - Contact form and information
- **Case Studies (/case-studies)** - Client success stories
- **Thank You (/thank-you)** - Post-form submission page

## Customization

### Colors

The color palette is defined in `tailwind.config.ts`:
- Primary: #0066FF (electric blue)
- Secondary: #00D9A3 (success green)
- Alert: #FF3B30 (red)

### Content

All content is based on the provided copy document. To update:
1. Edit the text directly in the component files
2. For pricing, update the `tiers` array in `PricingSection.tsx`
3. For testimonials, update the `testimonials` array in `TestimonialsSection.tsx`

### ROI Calculator

The calculator logic is in `lib/calculations.ts`. It uses:
- 30% close rate (constant)
- 50% AI booking rate (constant)
- User inputs: leads/month, current booking rate, avg job value

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Build for Production

```bash
npm run build
npm start
```

## WordPress Integration Note

This is a Next.js application, which runs on Node.js. For WordPress integration:

**Option 1: Static Export**
- Use `next export` to generate static HTML
- Upload files to WordPress hosting
- Note: Some features like forms will need backend setup

**Option 2: Headless WordPress**
- Use Next.js frontend with WordPress as CMS backend
- Requires API integration

**Option 3: Vercel Deployment**
- Deploy to Vercel (recommended)
- Point your domain to Vercel

## Performance Optimizations

- Lazy loading images
- Code splitting by route
- Tailwind CSS purging
- Font optimization
- Minimal JavaScript

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers

## Contact

For questions or support, contact: hello@wrespo.ai

---

Built with ❤️ for Wrespo.ai
