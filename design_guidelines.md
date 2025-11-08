# PUBG Tactical Guide - Mobile PWA Design Guidelines

## Design Approach
**Reference-Based Design System Hybrid**: Material Design 3 foundation with gaming tactical aesthetics inspired by apps like Discord, Valorant Guide apps, and competitive gaming tools.

**Core Design Philosophy**: Professional tactical interface with gaming DNA - clean, data-dense, and performance-focused while maintaining visual appeal through strategic accent colors and depth.

---

## Visual Identity

### Typography
- **Primary Font**: Inter (Google Fonts) - Clean, highly legible for data
- **Accent Font**: Rajdhani (Google Fonts) - Tactical, geometric feel for headings/stats
- **Hierarchy**:
  - Hero/Page Titles: Rajdhani Bold, 32px (2rem)
  - Section Headers: Rajdhani SemiBold, 24px (1.5rem)
  - Card Titles: Inter SemiBold, 18px (1.125rem)
  - Body Text: Inter Regular, 16px (1rem)
  - Meta/Stats: Inter Medium, 14px (0.875rem)
  - Captions: Inter Regular, 12px (0.75rem)

### Layout System
**Mobile-First Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16
- Card padding: p-4 or p-6
- Section spacing: mb-8 or mb-12
- Touch targets: minimum h-12 (48px) for buttons/interactive elements
- Safe zones: px-4 for page edges

---

## Component Library

### Navigation
**Bottom Tab Bar** (Fixed):
- 5 primary sections: Home, History, Coach, Profile, Admin
- Icons from Heroicons (outline for inactive, solid for active)
- 64px height with labels
- Floating design with backdrop blur

**Top App Bar**:
- Sticky header with page title
- Optional action buttons (search, filter)
- 56px height with shadow on scroll

### Cards & Containers

**Update History Cards**:
- Rounded corners (rounded-lg)
- Version badge in top-right corner
- Timeline connector line for chronological view
- Expandable accordion pattern for details
- Weapon/map change chips as tags

**Strategy Advice Cards**:
- AI-generated content with distinctive border treatment
- "Powered by Gemini AI" badge
- Copyable text sections
- Bookmark/save functionality icon

**Stat Cards** (Dashboard):
- Grid layout: 2 columns on mobile
- Icon + large number + label format
- Subtle gradient backgrounds for depth

### Forms & Inputs

**Player Profile Setup**:
- Segmented control for play style selection
- Multi-select chips for weapons/maps (scrollable horizontal)
- Slider controls for skill ratings
- Bottom sheet modal for editing

**Search/Filter**:
- Sticky search bar with clear button
- Filter chips below search (horizontal scroll)
- Bottom sheet for advanced filters

### Data Visualization

**Weapon Evolution Charts**:
- Line charts using Chart.js
- Tap to view data point details
- Swipeable between different weapons
- Legend at bottom with color-coded stats

**Meta Comparison Tool**:
- Side-by-side split view (scrollable)
- Highlight differences with accent borders
- Toggle between numeric/visual comparison

### Buttons & CTAs

**Primary Actions**:
- Pill-shaped buttons (rounded-full)
- 48px height minimum
- Solid fill with subtle shadow

**Secondary Actions**:
- Outlined buttons (border-2)
- Ghost style for tertiary actions

**Floating Action Button** (FAB):
- Bottom-right corner (fixed)
- For "Get Strategy Advice" on relevant pages
- 56px diameter with icon

---

## Page-Specific Layouts

### Home Dashboard
- Hero section: "This Day in PUBG History" card (if data available)
- Quick stats grid (2x2)
- Recent strategies list (last 3)
- Quick action tiles for main features

### Update History
- Search bar at top (sticky)
- Version filter chips (horizontal scroll)
- Timeline view with year separators
- Infinite scroll loading pattern

### AI Strategy Coach
- Player profile summary card (collapsible)
- Large "Get Advice" CTA button
- Conversation history cards (newest first)
- Input field at bottom (sticky) for quick questions

### Profile Management
- Avatar/username section
- Stats overview (season, rank simulation)
- Preference cards (maps, weapons, play style)
- Edit buttons within each section

### Admin Panel
- Password modal (centered, backdrop blur)
- Upload zone with drag-drop indicator
- Progress bar during upload
- Success/error toast notifications

---

## Visual Treatment

**Depth & Elevation**:
- Cards: subtle shadow (shadow-md)
- Modals: strong shadow (shadow-xl) with backdrop blur
- FAB: prominent shadow (shadow-lg)

**Interactive States**:
- Active: scale-95 transform on tap
- Focus: ring-2 outline with offset
- Loading: skeleton screens with shimmer animation
- Disabled: opacity-50 with cursor-not-allowed

**Micro-interactions**:
- Smooth transitions (transition-all duration-200)
- Spring animations for modals (scale + opacity)
- Subtle bounce on button press
- Slide-up for bottom sheets

---

## Images

**Hero/Header Images**:
- Home dashboard: PUBG Mobile battle scene (1200x600, optimized)
- Update History: Version-specific promotional art
- Coach page: Abstract tactical map visualization

**Icon Assets**:
- Weapon icons: Small 32x32 SVG representations
- Map thumbnails: 80x80 preview tiles
- Achievement badges: 48x48 for milestones

**Image Placement**:
- Update cards: Left-aligned thumbnail (80x80)
- Strategy suggestions: Optional tactical diagram illustrations
- Profile: Circular avatar placeholder (96x96)

---

## PWA-Specific Features

**Install Prompt**:
- Dismissible banner at top on first visit
- "Add to Home Screen" in menu

**Offline State**:
- Cached pages indicator
- Offline badge in navigation
- Graceful degradation message

**Loading States**:
- Skeleton screens matching content structure
- Pull-to-refresh on list views
- Optimistic UI updates

---

## Accessibility
- Touch targets: 48px minimum (mobile standard)
- Contrast ratios: WCAG AA minimum
- Focus indicators: visible ring on all interactive elements
- Screen reader labels on all icons/buttons
- Reduced motion support via prefers-reduced-motion