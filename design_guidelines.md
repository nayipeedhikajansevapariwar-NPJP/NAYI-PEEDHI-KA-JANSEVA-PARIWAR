# Design Guidelines: NAYI PEEDHI KA JANSEVA PARIVAR (NPJP)

## Design Approach
**Reference-Based**: Drawing inspiration from modern NGO platforms (charity: water, UNICEF) and dark-themed professional sites (Vercel, GitHub) to create trust and emotional connection while maintaining sophistication in a dark palette.

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - Clean, highly legible for both English and Hindi text
- Headings: 'Poppins' - Strong, impactful for hero statements and section titles

**Hierarchy**:
- Hero Headline: Poppins, 3.5rem (desktop) / 2rem (mobile), font-weight 700
- Section Headings: Poppins, 2.5rem (desktop) / 1.75rem (mobile), font-weight 600
- Subsections: Inter, 1.5rem, font-weight 600
- Body Text: Inter, 1rem, font-weight 400, line-height 1.7 (essential for Hinglish readability)
- Captions/Meta: Inter, 0.875rem, font-weight 400

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mt-8, gap-6)

**Container Strategy**:
- Max-width: 1280px (max-w-7xl) for full sections
- Content: 1024px (max-w-6xl) for text-heavy areas
- Forms: 640px (max-w-2xl) for optimal readability

**Grid Patterns**:
- Impact Stats: 3-column grid (lg:grid-cols-3, md:grid-cols-2, base: grid-cols-1)
- Programs/Services: 3-column cards
- Team Members: 4-column grid (lg:grid-cols-4)
- Gallery: Masonry-style 3-column grid with varying heights

## Component Library

### Navigation
- Sticky header with semi-transparent backdrop blur
- Logo left, navigation center/right with language toggle (Hinglish default)
- Mobile: Hamburger menu with slide-in drawer
- CTA button: "Donate Now" / "दान करें" prominently placed

### Hero Section (Homepage)
**Layout**: Full-viewport (90vh) with background image overlay
- Large impact image showing NGO activities/beneficiaries
- Centered content: Organization name in both Hindi and English
- Tagline in Hinglish (2 lines maximum)
- Dual CTAs: Primary "Get Involved" + Secondary "Learn More"
- Floating stats bar at bottom: "X+ Lives Impacted" | "Y+ Volunteers" | "Z+ Projects"

### Impact Statistics Cards
- 3-column layout with large numbers (4rem), icon above, description below
- Subtle card elevation with border treatment
- Counters with animation on scroll-into-view

### Programs/Services Cards
- 3-column grid with image top, content below
- Rounded corners (rounded-2xl)
- Title, short description (3-4 lines), "Learn More" link
- Hover: Subtle lift effect (translate-y slight shift)

### Team Member Cards
- 4-column grid with circular profile images
- Name, role in both languages
- Brief bio (collapsible on mobile)
- Social links if applicable

### Gallery
- Masonry grid with lazy loading
- Lightbox modal on click
- Category filters: "All", "Events", "Projects", "Volunteers"

### Forms (Contact, Volunteer Registration)
- 2-column layout on desktop (form left, info/map right)
- Clear labels in Hinglish
- Input fields: Ample padding (p-4), rounded (rounded-lg), border treatment
- Validation: Inline error messages
- Submit button: Full-width on mobile, auto-width on desktop

### Footer
- 4-column grid: About NPJP | Quick Links | Programs | Contact Info
- Newsletter signup: Email input + button
- Social media icons (Facebook, Instagram, Twitter, LinkedIn)
- Trust indicators: Registration number, certifications
- Copyright in both languages

### Admin Panel
- Sidebar navigation (fixed left, 280px width)
- Dashboard cards with key metrics
- Data tables with search, filter, pagination
- Modal forms for add/edit operations
- Clear success/error notifications

## Images Strategy

**Primary Hero Image**: Large, emotionally compelling photo showing NPJP's impact - children learning, community gatherings, or volunteers in action. Image should have slight dark overlay (opacity 40%) for text contrast.

**Additional Images**:
- About Page: Team photo, NGO office/workspace
- Programs: One hero image per program showing real activities
- Gallery Page: 20-30 authentic photos from events and projects
- Team Section: Professional headshots (circular crops)
- Donation Page: QR code images for UPI

**Image Treatment**: All images have subtle rounded corners (rounded-xl), slight shadow for depth on dark backgrounds.

## Animations
- Page transitions: Smooth fade-ins (300ms)
- Scroll reveals: Content fades up on scroll (stagger effect for grids)
- Hover states: Subtle scale (1.02) and shadow depth increase
- NO complex animations or distracting motion

## Accessibility
- ARIA labels for all interactive elements
- Keyboard navigation throughout
- Form inputs with proper labels and error states
- Alt text for all images in both Hindi and English
- Minimum contrast ratios maintained against dark backgrounds

## Dark Theme Structure (No Color Specs)
- Multiple depth layers: background → cards → elevated elements
- Border treatments for separation instead of heavy shadows
- Frosted glass effects for overlays
- High contrast for text readability
- Warm accent for CTAs and important actions