# Marcus Thorne Fitness Prototype - Implementation Kickstart

**Project Type:** New Prototype Landing Page  
**Framework:** Next.js 16 (App Router)  
**Styling:** Tailwind CSS v4 + Glass Effects  
**Typography:** Geist (Headings & Body)  
**Theme:** Dark Mode (Primary) with Amber Accent Highlights  
**Responsive:** Full Width, Mobile-First (Tablet & Mobile Support)  

---

## Design Tokens Overview

### Color System
- **Background:** `oklch(0.08 0 0)` - Deep charcoal (#0a0a0f)
- **Foreground (Text):** `oklch(0.95 0 0)` - Near white (#f2f2f2)
- **Card Base:** `oklch(0.12 0 0)` - Dark slate (#1a1a24)
- **Muted Text:** `oklch(0.65 0 0)` - Medium gray (#a6a6a6)
- **Accent:** `oklch(0.74 0.189 84.429)` - Warm amber (#fbbf24)
- **Border:** `oklch(0.25 0 0)` - Subtle dark divider (#404050)

### Glass Effects
- **Glass Background:** `rgba(18, 18, 24, 0.6)` with backdrop blur
- **Glass Border:** `rgba(251, 191, 36, 0.1)` - Subtle amber glow
- **Utility Classes:** `.glass-effect`, `.glass-card` (hover states included)

### Animation Utilities
- **Fade In:** 0.6s ease-in-out
- **Fade In Up:** 0.8s ease-out (for staggered content)
- **Scroll Indicator:** Continuous bounce animation
- **Smooth Scroll:** Applied globally

---

## Page Sections Architecture

### 1. Navigation Bar
- **Sticky Header** with logo (left), nav links (center), CTA button (right)
- **Mobile:** Hamburger menu (3-line icon) on right, collapsible navigation
- **Glass Effect:** Semi-transparent backdrop, subtle border
- **Interactive:** Hover underline on nav links (amber glow on accent)
- **CTA Button:** Amber background, dark text, hover lift effect

### 2. Hero Section
- **Full Viewport Height** with gradient background (dark to darker)
- **Subtle Amber Radial Glow:** Positioned behind headline (top-right offset)
- **Main Headline:** Large, bold, with text balance
- **Subheading:** Muted text, supporting message
- **Primary CTA Button:** Prominent, opens modal (Buy Now)
- **Scroll Indicator:** Animated arrow or chevron at bottom
- **Animation:** Fade-in-up for text elements on page load

### 3. Value Propositions (Bento Grid)
- **4-Card Grid** (2x2 on desktop, stacked on tablet/mobile)
- **Glass Card Effect:** Semi-transparent with amber border glow
- **Card Components:**
  - **Icon/Visual:** Top of card (can be illustration or abstract)
  - **Title:** Bold, accent color emphasis
  - **Description:** Muted text, 2-3 lines max
- **Interactive:** Hover scale effect, elevated shadow
- **Spacing:** Equal gap between cards, full-width container with padding
- **Cards:**
  - Metabolic Engine
  - Executive Fuel
  - Performance Protocols
  - Recovery Mastery

### 4. How It Works / Process
- **3-Step Timeline** with visual connectors
- **Layout:** Vertical on mobile, horizontal on desktop
- **Each Step:**
  - Step number (amber accent)
  - Brief title
  - Short description (2-3 sentences)
  - Optional illustration/icon
- **Animation:** Staggered fade-in-up for steps

### 5. Testimonials / Case Studies
- **Masonry Grid Layout:** 4 testimonial cards (2x2 grid)
- **Glass Card Effect:** Consistent with value prop cards
- **Card Content:**
  - Client name (bold, accent color)
  - Brief quote or result (italic, lighter text)
  - Stat/metric (amber highlight)
  - Background details (muted)
- **Interactive:** Smooth hover transitions
- **Mobile:** Single column, full width

### 6. FAQ Section
- **Accordion Component** (collapsible Q&A)
- **Design:** Subtle dividers, accent color for open states
- **Animation:** Smooth expand/collapse (max-height transition)
- **Spacing:** Generous padding, clear visual hierarchy
- **Content:** Example FAQs (to be edited later)

### 7. CTA Section (Mid-Page)
- **Full-Width Banner** with dark background
- **Center-Aligned Content:** Headline + subtext + CTA button
- **Second CTA Button:** "Buy Now" (opens modal)
- **Secondary CTA:** "Contact Marcus" (navigates to contact page)
- **Animation:** Fade-in on scroll

### 8. Contact Information Block
- **Company details** (address, email, phone - if applicable)
- **Social links** (if applicable)
- **Glass effect styling**
- **Typography:** Muted text with accent highlights for links

### 9. Call-to-Action Modal
- **Triggered by:** "Buy Now" buttons (minimum 3 placements)
- **Content:**
  - Product/offer headline
  - Price: $197
  - Brief description
  - Input fields (name, email, phone)
  - "Complete Purchase" button
  - Close button (X icon)
- **Animation:** Fade-in modal, smooth overlay
- **Overlay:** Dark background with opacity

### 10. Contact Page (Separate Route)
- **Route:** `/contact`
- **Layout:** Hero section + form + contact details
- **Form Fields:**
  - Name
  - Email
  - Subject
  - Message
  - Submit button
- **Form Styling:** Glass effect inputs, accent focus states
- **Success State:** Thank you message or redirect
- **No Email Capture:** Contact form only, no newsletter signup

### 11. Footer
- **Dark background** with border-top (subtle)
- **Content Sections:**
  - Brand/logo (left)
  - Quick links (center)
  - Social icons (right)
- **Bottom:** Copyright, "Back to Top" smooth scroll button
- **Back to Top:** Amber accent, smooth scroll to page top (no JavaScript, use anchor)

---

## Component Structure (Short, Reusable)

### Layout Components
- `Navbar.tsx` (≤150 lines) - Navigation with mobile menu
- `Footer.tsx` (≤100 lines) - Footer with links
- `Container.tsx` (≤50 lines) - Full-width wrapper

### Section Components
- `HeroSection.tsx` (≤180 lines) - Hero with CTA
- `ValuePropsGrid.tsx` (≤160 lines) - 4-card grid
- `HowItWorks.tsx` (≤180 lines) - 3-step process
- `Testimonials.tsx` (≤180 lines) - Masonry testimonial cards
- `FAQ.tsx` (≤200 lines) - Accordion component
- `CTABanner.tsx` (≤120 lines) - Mid-page CTA section
- `ContactBlock.tsx` (≤100 lines) - Contact info

### Reusable Components
- `Button.tsx` (≤80 lines) - Primary CTA with variants
- `Card.tsx` (≤100 lines) - Glass effect card base
- `Modal.tsx` (≤150 lines) - Reusable modal wrapper
- `Input.tsx` (≤80 lines) - Form input with glass effect
- `Accordion.tsx` (≤140 lines) - FAQ accordion item

### Page Files
- `app/page.tsx` (≤80 lines) - Main landing page (composes sections)
- `app/contact/page.tsx` (≤100 lines) - Contact page with form

---

## Feature Implementation Details

### Glass Effects
- Applied to: Cards, inputs, modals, navbar background
- Technique: `backdrop-blur-md` + `bg-opacity-30` + amber border
- Hover State: Increased opacity (40%), subtle scale transform
- Transition: 300ms ease-in-out

### Responsive Breakpoints
- **Mobile:** < 768px (single column layouts, stacked cards)
- **Tablet:** 768px - 1024px (2-column grids where applicable)
- **Desktop:** > 1024px (full 4-column/2x2 layouts)
- **Mobile Menu:** Hamburger icon, slide-in navigation

### Animations
- **Page Load:** Fade-in-up for hero text and sections
- **Scroll Behavior:** Staggered animations as elements enter viewport
- **Hover States:** Scale, glow, shadow elevation on interactive elements
- **Modal:** Fade-in modal content, overlay background
- **Buttons:** Hover lift (translateY -2px), shadow expansion
- **Links:** Underline animation (left-to-right, amber color)

### Accessibility
- Semantic HTML (`<main>`, `<section>`, `<footer>`)
- ARIA labels for buttons, modals, and interactive elements
- Keyboard navigation support (modal close, link focus)
- Screen reader text for icons and decorative elements
- Color contrast: Amber accent on dark background (WCAG AA compliant)

### SEO Optimization
- Meta tags: Title, description, Open Graph (og:*)
- Heading hierarchy: H1 (hero) → H2 (sections) → H3 (subsections)
- Alt text: All images (including generated placeholders)
- Structured data: JSON-LD for schema markup (optional, Phase 2)
- Mobile-friendly: Responsive design, fast loading
- Performance: Image optimization, lazy loading for below-fold content

---

## CTA Placements (Minimum 3)

1. **Navbar:** Right-aligned "Buy Now" button (sticky, amber background)
2. **Hero Section:** Large primary CTA button below headline
3. **After Value Props:** Secondary CTA banner with headline + "Join Now" button
4. **FAQ Section:** CTA button at bottom: "Ready to Transform?" → opens modal
5. **Contact Block:** "Get Started" button (optional, links to modal)
6. **Footer:** "Back to Top" (smooth scroll) + secondary "Learn More" link

All CTAs (except Back to Top) trigger the same modal or route.

---

## Page Routes

- **`/`** - Main landing page (all sections)
- **`/contact`** - Contact page with form

---

## Image Assets (To Be Generated)

1. **Hero Background:** Subtle gradient texture (dark with amber accents)
2. **Value Prop Icons:** 4 unique icons/illustrations (Metabolic, Executive, Performance, Recovery)
3. **How It Works Visuals:** 3 step illustrations or abstract shapes
4. **Testimonial Avatars:** 4 placeholder profile images (circular, glass effect border)
5. **Logo:** Marcus Thorne Fitness brand mark (if not provided)

**Note:** All images generated as placeholders; to be replaced with real assets later.

---

## Form Handling

### Modal Form (CTA Modal)
- **Fields:** Name, Email, Phone
- **Validation:** Required fields, email format
- **Submission:** Placeholder (log to console in prototype phase)
- **Success State:** "Thank you!" message + close option

### Contact Form (Contact Page)
- **Fields:** Name, Email, Subject, Message
- **Validation:** Required fields, email format
- **Submission:** Placeholder (log to console in prototype phase)
- **Success State:** Redirect or thank you overlay
- **No Newsletter Signup:** Contact form only

---

## Performance & Best Practices

- **Component Size:** Max 600 lines per file (enforced)
- **Reusability:** All components accept props for maximum flexibility
- **No State Management:** Use placeholders for content
- **CSS-in-JS:** Tailwind utilities + custom animations in globals.css
- **Image Optimization:** Next.js Image component (when not using canvas)
- **Lazy Loading:** Sections below fold (optional, Phase 2)
- **Bundle Size:** Monitor imports, avoid bloat

---

## Responsive Design Details

### Mobile (< 768px)
- **Navbar:** Hamburger menu (toggle on/off)
- **Hero:** Full-width, centered text, large touch targets
- **Grids:** Single column stacked layout
- **Cards:** Full-width with padding, no gaps
- **Buttons:** Large touch area (min 44px height)
- **Typography:** Responsive font sizes (h1: 28px → 36px)

### Tablet (768px - 1024px)
- **Navbar:** Full nav visible or simplified
- **Grids:** 2-column layout
- **Cards:** Side-by-side pairs
- **Typography:** Medium font sizes

### Desktop (> 1024px)
- **Navbar:** Full navigation bar
- **Grids:** 2x2 or full 4-column layout
- **Typography:** Largest font sizes
- **Spacing:** Max-width container with side padding

---

## Development Phases

### Phase 1 (Current - MVP)
- Navbar + Hero Section
- Value Props Grid
- How It Works
- Testimonials
- FAQ Accordion
- CTA Modal (opens, displays placeholder)
- Contact Page (form placeholder)
- Footer with Back to Top
- Global animations + responsive design

### Phase 2 (Future)
- Backend integration (form submission)
- Email capture
- Analytics & conversion tracking
- Additional pages (blog, results, etc.)
- Advanced animations (scroll-triggered)
- Image replacement (real assets)

---

## Design System Summary

| Element | Color | Font | Size | Animation |
|---------|-------|------|------|-----------|
| Headline | Foreground | Geist Bold | 32-48px | Fade-in-up |
| Body Text | Foreground | Geist Regular | 14-16px | Fade-in |
| Accent Highlight | Amber | Geist Bold | 14-20px | Underline on hover |
| Muted Text | Muted | Geist Regular | 12-14px | None |
| CTA Button | Amber bg | Geist Semibold | 14-16px | Scale + shadow on hover |
| Card Border | Amber (10%) | - | 1px | Glow on hover |
| Background | Deep charcoal | - | 100vw | None |

---

## Next Steps

1. ✅ **Design tokens finalized** (globals.css updated)
2. ⏳ **Create layout structure** (app/page.tsx + main sections)
3. ⏳ **Build reusable components** (button, card, input, modal)
4. ⏳ **Develop page sections** (hero, value props, testimonials, etc.)
5. ⏳ **Add animations & interactions** (scroll, hover, modal)
6. ⏳ **Implement responsive design** (mobile menu, breakpoints)
7. ⏳ **Generate placeholder images** (hero, icons, testimonials)
8. ⏳ **Create contact page** (form, validation)
9. ⏳ **SEO optimization** (meta tags, structured data)
10. ⏳ **Testing & refinement** (cross-browser, mobile testing)

---

## Key Constraints & Notes

- **No State Management:** Use props and event handlers only
- **Full Width:** No max-width container restriction
- **Dark Theme Strict:** Primary theme is dark; accent is amber only
- **Component Limit:** Keep files to ≤600 lines for maintainability
- **Glass Effects:** Test color contrast; will adjust if needed
- **Placeholder Content:** All text/images are placeholders for prototype
- **No Email Capture:** Contact form only, no newsletter on landing page
- **Smooth Scroll:** All anchor links use CSS smooth-scroll
- **Modal-First CTA:** All "Buy Now" triggers open modal, not external link

---

**Last Updated:** 2/2/2026  
**Status:** Ready for Implementation Phase 1
