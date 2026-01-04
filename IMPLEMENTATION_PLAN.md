# Novasou Web Application - Implementation Plan & Analysis

## 1. Goal Description
Build a pixel-perfect, responsive "frontend head" web application for Novasou based on the provided Figma design images. The application must be architected to support future Strapi CMS integration, enabling a "No-Code" page building experience for content editors.

## 2. Technology Stack
- **Frontend Framework**: **Next.js 14+ (App Router)**
  - *Why*: Supports React Server Components (RSC) for performance, excellent SEO, and easy integration with Strapi via REST/GraphQL.
- **Language**: **TypeScript**
  - *Why*: Essential for defining strict interfaces for Strapi Content Types.
- **Styling**: **Tailwind CSS**
  - *Why*: User requested. Matches the need for a custom, pixel-perfect design system without fighting default component styles.
- **Animation**: **Framer Motion**
  - *Why*: "Dynamic Design" requirement. Essential for micro-interactions, scroll reveals, and smooth transitions.
- **Icons**: **Lucide React**
  - *Why*: Clean, modern stroke icons that match the "tech/futuristic" aesthetic.
- **Data Fetching**: **TanStack Query** (React Query)
  - *Why*: Efficient server-state management, caching, and background updates for Strapi content.
- **Forms**: **React Hook Form + Zod**
  - *Why*: Type-safe form validation for the Contact page.

## 3. Design System & Theme
Based on `Novasou-Style guide.jpg` and page visuals.

### Colors
*To be defined in `tailwind.config.ts`*
- **Primary Blue**: `#284BE3`
- **Gradient**:
  - `gradient-start`: `#284BE3`
  - `gradient-end`: `#002CAD`
- **Dark Blue/Navy**: `#04184C` (Backgrounds, Footer)
- **Text**:
  - `text-primary`: `#1A1A1A`
  - `text-secondary`: `#666666`
  - `text-invert`: `#FFFFFF`
- **Backgrounds**:
  - `bg-white`: `#FFFFFF`
  - `bg-light`: `#F8F9FA` (Subtle section backgrounds)

### Typography
- **Heading Font**: **Audiowide** (or similar Display font seen in Hero) - *Check Google Fonts*.
- **Body Font**: **Titillium Web** or **Inter**.

### UI Components (Global)
- **Buttons**:
  - `Primary`: Solid Blue, Rounded-md.
  - `Secondary`: Outline Blue.
  - `Text`: Arrow link.
- **Cards**:
  - White bg, drop-shadow-sm, rounded-xl.
  - Hover effects: Lift up, shadow increase.

## 4. URL Structure & Sitemap
Derived from the provided validation images.

| File | URL Route | Type | Description |
|------|-----------|------|-------------|
| `Novasou-home-page.jpg` | `/` | Dynamic (Page) | Main landing page. |
| `Novasou about-page.jpg` | `/about-us` | Dynamic (Page) | Company story, mission. |
| `Novasou Growth-page.jpg` | `/growth` | Dynamic (Page) | Benefits, L&D. |
| `Novasou careers-page.jpg` | `/careers` | Hybrid | Dynamic header + Job Listing module. |
| `Novasou job-detail-page.jpg`| `/careers/[slug]`| Dynamic (Job) | Single Job details. |
| `Novasou contact-page.jpg` | `/contact` | Dynamic (Page) | Form + Info. |
| `Novasou for company-page.jpg`| `/for-companies`| Dynamic (Page) | B2B Services/Teams. |
| `Novasou life-at-page.jpg` | `/life-at-novasou`| Dynamic (Page) | Culture, Team gallery. |
| `Novasou not-found-page.jpg`| `*` (404) | System | Custom 404 layout. |
| `Novasou privacy-policy.jpg`| `/privacy-policy` | Dynamic (Page) | text-heavy legal page. |

## 5. Project Folder Structure
Opinionated scalable Next.js structure.

```
/src
  /app
    /(site)             # Route Group for standard layout
      /page.tsx         # Home
      /[slug]/page.tsx  # Universal Catch-all for CMS Pages
      /careers
        /[jobSlug]/page.tsx
        /page.tsx
      layout.tsx
    /api                # Route Handlers
    layout.tsx          # Root Layout (Providers)
    not-found.tsx
    globals.css
  /components
    /global             # Navbar, Footer
    /ui                 # Button, Input, Select (Atomic)
    /blocks             # Strapi Dynamic Zone Components
      /Hero.tsx
      /FeatureGrid.tsx
      /ContentLeftRight.tsx
      /ContactForm.tsx
  /lib
    /strapi             # Fetching logic
    /utils.tsx          # cn() helper
    /types              # TypeScript definitions
  /constants            # Hardcoded fallbacks (Nav links)
```

## 6. Detailed Page Breakdown
Analysis of specific requirements per page based on visual mockups.

### 6.1 Home Page (`/`)
- **Hero**: Full-screen width, bold typography (Audiowide), "Future of Work" messaging, animated background/shapes, primary CTA.
- **Trusted By/Partners**: Logo strip.
- **Feature Highlights**: Cards with icons explaining core value props.
- **Growth/Stats**: Animated number counters.
- **Latest Insights**: 3-column grid of recent blog/news items (optional/future).

### 6.2 About Us (`/about-us`)
- **Mission Statement**: Large typography, clean white background.
- **Story/Timeline**: Vertical or horizontal timeline of the company.
- **Culture Video/Image**: Large media element using `MediaTextSplit` block.
- **Team**: Link to Life at Novasou or inline team preview.

### 6.3 Growth (`/growth`)
- **Focus**: L&D, Career progression paths.
- **Structure**:
  - Intro text.
  - Alternating "Benefit" blocks (Text Left/Image Right).
  - Testimonials slider (optional).

### 6.4 Careers (`/careers`)
- **Header**: "Join the Revolution".
- **Department Filter**: Tabs or Dropdown (Engineering, Design, Product).
- **Job List**: Card list showing Position, Location, Type, and "Apply" arrow.
- **Empty State**: "No open positions" message.

### 6.5 Job Detail (`/careers/[slug]`)
- **Sticky Sidebar**: "Apply Now" button and share links.
- **Content Area**: Rich text (Headers, Lists) for Responsibilities/Requirements.
- **Related Jobs**: 3 cards at bottom.

### 6.6 Contact (`/contact`)
- **Layout**: Split screen (Info Left, Form Right).
- **Info**: Email, Address, Map (image or embed).
- **Form**: Name, Email, Subject, Message. Validation required.

### 6.7 Life at Novasou (`/life-at-novasou`)
- **Gallery Grid**: Masonry or grid of office/event photos.
- **Employee Stories**: Quotes/Cards.
- **Values**: Icon grid of core values.

## 7. Strapi Content Model (Architecture)
**Goal**: Route handling without dev intervention.

### A. Collection Type: `Pages`
*The Engine of the website.*
- **Fields**:
  - `title` (Short Text)
  - `slug` (UID) - Unique URL identifier.
  - `seo` (Component: `MetaTitle`, `MetaDescription`, `ShareImage`)
  - **`blocks`** (Dynamic Zone) - The content builder.

### B. Dynamic Zone Components (`blocks`)
These map 1:1 to React components in `/src/components/blocks`.
1.  **`Hero`**:
    - `headline` (Text), `subheadline` (Text), `backgroundImage` (Media), `ctaButton` (Component: Label + Link).
2.  **`RichTextSection`**:
    - `content` (Rich Text - Markdown/JSON). Used for Privacy Policy, simple pages.
3.  **`FeatureGrid`**:
    - `title` (Text), `items` (Repeater: Icon, Title, Description). Used in Growth/Home.
4.  **`MediaTextSplit`**:
    - `media` (Image/Video), `text` (Rich Text), `alignment` (Enum: Left/Right). Used in About/LifeAt.
5.  **`StatsRow`**:
    - `stats` (Repeater: Number, Label).
6.  **`JobListingParams`** (Special):
    - `departmentFilter` (Optional). Tells the frontend to render the Job Board here.
7.  **`ContactFormBlock`** (Special):
    - `emailRecipient` (Email). Renders the contact form.

### C. Collection Type: `Jobs`
- `position` (Text)
- `slug` (UID)
- `department` (Enum: Engineering, Product, Design...)
- `location` (Text)
- `type` (Enum: Full-time, Contract)
- `content` (Rich Text) - The Job Description.
- `applyLink` (Text - or internal form).

### D. Single Type: `Global`
- `navigation` (Repeater: Label, Page Link, External Link).
- `footer` (Component: Column Links, Social Links).
- `defaultSeo` (Component).

## 8. Global & Reusable Components
1.  **`Navbar`**:
    - Sticky/Fixed.
    - Transparent on top (Hero), White on scroll.
    - Mobile Menu (Hamburger).
2.  **`Footer`**:
    - Links derived from Global settings.
3.  **`Button`**:
    - Variants: `default`, `outline`, `ghost`, `link`.
    - Sizes: `sm`, `md`, `lg`.

## 9. Implementation Steps (Plan)
1.  **Setup**: Initialize Next.js 14, Tailwind, Lucide, Fonts.
2.  **Foundation**: Build `Button`, `Typography` classes, `Container`.
3.  **Layout**: implement `Navbar` and `Footer` (hardcoded first).
4.  **Blocks System**: Create the `BlockRenderer` component.
5.  **Page Construction**:
    - Build `Hero`, `FeatureGrid`, `MediaText`.
    - Assemble "Home" using these blocks (mocked data).
    - Assemble "About", "Growth", "For Company" using blocks.
6.  **Functional Pages**:
    - Build `JobBoard` (Careers).
    - Build `ContactForm`.
7.  **Responsive Polish**: Check all break points.
