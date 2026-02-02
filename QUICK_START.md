# Marcus Thorne Fitness - Quick Start Guide

## Preview Your Work

Click the **Preview** button in the top right to see the live landing page. All components are interactive and fully responsive.

---

## Key Features at a Glance

### 1. Responsive Design
- **Desktop (>1024px):** Full 4-column layouts, large typography
- **Tablet (768-1024px):** 2-column grids, medium fonts
- **Mobile (<768px):** Single column, hamburger menu, optimized touch targets

### 2. Interactive Elements
- **Hamburger Menu:** Click the icon in top-right on mobile
- **Navigation Links:** Click any nav item to smooth scroll
- **CTA Buttons:** Opens "$197 Offer" modal (all amber buttons)
- **FAQ Accordion:** Click questions to expand/collapse answers
- **Contact Form:** Fill out and submit on `/contact` page

### 3. Design Highlights
- **Glass Effects:** Semi-transparent cards with amber border glow
- **Animations:** Staggered fade-ins, hover effects, scroll indicators
- **Amber Accent:** Used for CTAs, highlights, and interactive elements
- **Dark Theme:** Deep charcoal background with near-white text

---

## Making Changes

### Edit Content

**Testimonials:** `components/sections/Testimonials.tsx` (line 11-30)
```tsx
const testimonials: Testimonial[] = [
  {
    name: 'David Chen',
    quote: 'Your quote here...',
    metric: '-18 lbs',
    background: 'Tech Founder',
    initial: 'D',
  },
  // ... more testimonials
]
```

**FAQ Items:** `components/sections/FAQ.tsx` (line 6-40)
```tsx
const faqs: FAQItem[] = [
  {
    question: 'Your question here?',
    answer: 'Your answer here...',
  },
  // ... more FAQs
]
```

**Value Props:** `components/sections/ValuePropsGrid.tsx` (line 9-30)
```tsx
const valueProps: ValueProp[] = [
  {
    title: 'Your Title',
    description: 'Your description...',
    icon: '⚡', // Use any emoji or Unicode
  },
  // ... more props
]
```

**Navigation Links:** `components/Navbar.tsx` (line 15-20)
```tsx
const navLinks = [
  { label: 'About', href: '#value-props' },
  // ... edit as needed
]
```

### Edit Styling

All colors use design tokens in `app/globals.css`:
- **`text-foreground`** - Primary text (white)
- **`text-muted`** - Secondary text (gray)
- **`bg-background`** - Page background (charcoal)
- **`bg-card`** - Component backgrounds (dark slate)
- **`bg-accent`** - Amber buttons and highlights

Example:
```tsx
// Change button color
<CTAButton variant="primary">Button</CTAButton>
// Primary = amber bg, Secondary = outline

// Change text color
<h2 className="text-accent">Accent Color</h2>
<p className="text-muted">Muted Color</p>
```

### Edit Images

Replace placeholder images:
1. **Hero Background:** `/public/hero-bg.jpg`
2. **Icons:** `/public/icon-*.jpg` (metabolic, performance, recovery)
3. **Avatars:** `/public/avatar-placeholder.jpg`

Upload your images to `/public` and update paths in components.

---

## Component Structure

### Layout
```
Navbar (sticky)
  ↓
Main Content
  ├── HeroSection
  ├── ValuePropsGrid
  ├── HowItWorks
  ├── Testimonials
  ├── FAQ
  └── CTABanner
  ↓
Footer
  ↓
CTAModal (overlay)
```

### Reusable Components
- **CTAButton** - Amber button with variants (primary/secondary)
- **GlassCard** - Glass effect card component
- **Container** - Responsive width wrapper
- **GlassCard** - All cards with glow effect

---

## Customization Tips

### 1. Change Accent Color
Edit `app/globals.css` (line 10 and 27):
```css
--accent: oklch(0.74 0.189 84.429); /* Currently amber */
```

Use an online oklch color picker to find your new color.

### 2. Change Fonts
Edit `app/layout.tsx` (line 7-8):
```tsx
import { Geist, Geist_Mono } from 'next/font/google'
// Replace with other Google fonts

import { Inter, Playfair_Display } from 'next/font/google'
const _geistSans = Inter({ subsets: ["latin"], variable: '--font-sans' })
const _geistMono = Playfair_Display({ subsets: ["latin"], variable: '--font-mono' })
```

### 3. Adjust Animation Speed
Edit `app/globals.css` (line 147-159):
```css
.fade-in {
  animation: fadeIn 0.6s ease-in-out; /* Change 0.6s */
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out; /* Change 0.8s */
}
```

### 4. Change CTA Price
Edit `components/CTAModal.tsx` (line 47):
```tsx
<p className="text-3xl font-bold text-accent">$197</p>
// Change 197 to your price
```

---

## Form Handling

### CTA Modal (`CTAModal.tsx`)
Currently logs form data to console. To integrate with backend:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('[v0] Form submitted:', formData)
  
  // Add API call here
  // await fetch('/api/orders', { method: 'POST', body: ... })
}
```

### Contact Form (`contact-client.tsx`)
Same structure - logs to console, ready for backend integration:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('[v0] Contact form submitted:', formData)
  
  // Add API call here
}
```

---

## Common Tasks

### Add New Section
1. Create `components/sections/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to main content area

### Add New FAQ Item
Edit `components/sections/FAQ.tsx` and add to `faqs` array:
```tsx
{
  question: 'New question?',
  answer: 'Your answer...',
}
```

### Update Email/Contact Info
Edit `components/Footer.tsx` to add contact details:
```tsx
<p className="text-foreground/60 text-sm">
  Email: your@email.com
</p>
```

### Change CTA Modal Title
Edit `components/CTAModal.tsx` (line 41-43):
```tsx
<h2 className="text-2xl font-bold">Your New Headline</h2>
<p className="text-foreground/60">Your new subheading</p>
```

---

## Responsive Testing

### Test on Different Devices
Use browser DevTools (F12) → Toggle Device Toolbar:
- **iPhone 12:** 390×844
- **iPad:** 768×1024
- **Desktop:** 1920×1080

### Check Mobile Menu
- At <768px width, hamburger icon appears
- Click to toggle menu open/closed
- Menu includes all nav links and CTA button

---

## Performance Tips

- Images are placeholders - optimize production images (use WebP)
- Lazy load images below fold (Phase 2)
- Minify CSS/JS for production (`npm run build`)
- Consider CDN for global deployment

---

## Troubleshooting

**Modal Won't Open?**
Check `app/page.tsx` - ensure `onCTAClick` is passed to Navbar and CTABanner

**Menu Not Closing on Mobile?**
Add `onClick={() => setMobileMenuOpen(false)}` to nav links in `Navbar.tsx`

**Styling Not Applied?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check class names match design tokens
- Verify Tailwind CSS is imported in globals.css

**Form Not Submitting?**
- Check browser console for errors
- Ensure inputs have `required` attribute
- Verify form handler is connected

---

## Deployment

### Deploy to Vercel
1. Click **Publish** button in top-right
2. Connect GitHub repository (optional)
3. Select deployment environment
4. Your site is live!

### Custom Domain
1. Go to Vercel dashboard
2. Project settings → Domains
3. Add your custom domain

---

## Next Steps

1. **Review:** Check the preview and test all interactions
2. **Customize:** Update content, images, and colors
3. **Optimize:** Add backend integration, analytics
4. **Launch:** Deploy to production and promote

---

**Questions?** Review `IMPLEMENTATION_COMPLETE.md` for detailed documentation.
