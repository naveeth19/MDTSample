# Mahendra Travels - Website

A modern, responsive website for Mahendra Travels featuring a hero section with animated elements, an About Us section with auto gallery carousel, and smooth scroll-based background color transitions.

## 🚀 Features

- **Hero Section**: Eye-catching hero with gradient animated heading
- **Rotating Features**: Dynamic feature list that rotates every 2.6 seconds
- **About Us Section**: Layered split layout with raised content card and auto gallery carousel
- **Fleet Section**: 3D card grid showcasing vehicles with hover effects
- **Fleet Listing Page**: Complete grid view of all available vehicles
- **Individual Vehicle Pages**: SEO-optimized pages for each vehicle with detailed information
- **Auto Gallery Carousel**: Automatically cycles through 6-7 gallery images with fade-slide transitions
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Smooth Scroll Effects**: Background color transitions based on scroll position
- **Modern UI**: Clean, professional design with smooth animations

## 📁 Project Structure

```
Mahe/
├── index.html (main homepage)
├── README.md
└── src/
    ├── assets/
    │   ├── logo/
    │   │   └── main-logo.png (add your navbar logo here)
    │   ├── images/
    │   ├── hero/
    │   │   └── hero-image.png (add your hero image here)
    │   ├── gallery/
    │   │   ├── gallery-1.png (add gallery images here)
    │   │   ├── gallery-2.png
    │   │   ├── gallery-3.png
    │   │   ├── gallery-4.png
    │   │   ├── gallery-5.png
    │   │   ├── gallery-6.png
    │   │   └── gallery-7.png
    │   ├── fleet/
    │   │   ├── innova-crysta.png (add fleet vehicle images here)
    │   │   ├── urbania-9.png
    │   │   ├── urbania-14.png
    │   │   ├── urbania-16.png
    │   │   ├── coach-21.png
    │   │   └── coach-40.png
    │   ├── services/
    │   │   ├── city-taxi.png (add service icons here)
    │   │   ├── airport.png
    │   │   ├── outstation.png
    │   │   ├── corporate.png
    │   │   └── events.png
    │   └── blogs/
    │       ├── innova-mysore.png (add blog post images here)
    │       └── innova-coorg.png
    ├── pages/
    │   ├── fleet/
    │   │   ├── index.html (fleet listing page)
    │   │   ├── innova-crysta.html
    │   │   ├── urbania-9-seater.html
    │   │   ├── urbania-14-seater.html
    │   │   ├── urbania-16-seater.html
    │   │   ├── 21-seater-coach.html
    │   │   └── 40-seater-coach.html
    │   ├── services/
    │   │   ├── index.html (services listing page)
    │   │   ├── city-taxi-rentals.html
    │   │   ├── airport-transfers.html
    │   │   ├── outstation-travel.html
    │   │   ├── corporate-transport.html
    │   │   └── event-transport.html
    │   └── blog/
    │       ├── index.html (blog listing page)
    │       ├── innova-to-mysore.html
    │       └── innova-to-coorg.html
    ├── styles/
    │   └── main.css
    └── scripts/
        ├── hero.js
        ├── scroll-colors.js
        └── carousel.js
```

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables and animations
- **JavaScript**: Vanilla JS for interactivity
- **Bootstrap 5**: Responsive grid and components

## 📋 Setup Instructions

1. **Add Navbar Logo**: Place your logo image at `src/assets/logo/main-logo.png`
   - **Location**: `src/assets/logo/main-logo.png`
   - **Format**: PNG (recommended) or SVG
   - **Recommended Size**: Height of 50px (width will scale proportionally)
   - **Note**: If the logo is not found, the text "MAHENDRA TRAVELS" will be displayed as a fallback

2. **Add Preloader Logo**: Place your preloader logo image at `src/assets/logo/mahendra-travels-logo.png`
   - **Location**: `src/assets/logo/mahendra-travels-logo.png`
   - **Format**: PNG (recommended) or SVG
   - **Recommended Size**: Width of 340px (height will scale proportionally)
   - **Note**: This logo is used for the preloader animation. If this file is not found, the system will fallback to `main-logo.png`. Use a high-resolution logo with white background for best results.

3. **Add Hero Image**: Place your hero image at `src/assets/hero/hero-image.png`
   - Recommended size: 1200x800px or larger
   - Format: PNG
   - If no image is provided, a fallback SVG placeholder will be displayed

4. **Add Gallery Images**: Place your gallery images in `src/assets/gallery/` folder
   - **Location**: `src/assets/gallery/`
   - **Naming Convention**: Name your images as `gallery-1.png`, `gallery-2.png`, `gallery-3.png`, etc.
   - **Supported Images**: 6-7 images (gallery-1.png through gallery-7.png)
   - **Format**: PNG
   - **Recommended Size**: 1200x800px or larger for best quality
   - **Note**: The carousel will automatically detect and display all images. If an image is missing, it will be skipped. If no images are found, placeholder SVGs will be displayed.

5. **Add Fleet Vehicle Images**: Place your fleet vehicle images in `src/assets/fleet/` folder
   - **Location**: `src/assets/fleet/`
   - **Required Images** (exact names required):
     - `innova-crysta.png` - For Innova Crysta vehicle
     - `urbania-9.png` - For Urbania 9 Seater
     - `urbania-14.png` - For Urbania 14 Seater
     - `urbania-16.png` - For Urbania 16 Seater
     - `coach-21.png` - For 21 Seater Coach
     - `coach-40.png` - For 40 Seater Coach
   - **Format**: PNG (recommended) or JPG
   - **Recommended Size**: 800x600px or larger
   - **Aspect Ratio**: 4:3 or 16:9 works best
   - **Note**: If images are missing, placeholder text will be displayed. Make sure to use the exact filenames listed above.

6. **Open in Browser**: Simply open `index.html` in your web browser

7. **Local Development**: For better development experience, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## 🎨 Customization

### Hero Content
Edit the hero content in `index.html`:
- Heading: Line 30
- Sub-line: Line 31
- Rotating features: Edit array in `src/scripts/hero.js` (line 8-13)
- Buttons: Lines 33-36

### Colors
Background colors for sections are defined in `src/scripts/scroll-colors.js`:
```javascript
const sections = [
    { name: 'hero', color: '#FFFFFF' },
    { name: 'about', color: '#F6F7F9' },
    { name: 'fleet', color: '#F7F8FA' },
    { name: 'services', color: '#F3F6FB' }
];
```

### Gallery Images
To add or modify gallery images:
1. Place PNG images in `src/assets/gallery/` folder
2. Name them as `gallery-1.png`, `gallery-2.png`, etc. (up to gallery-7.png)
3. Update the image list in `src/scripts/carousel.js` if you need different names or more images

### Animation Speed
- Rotating features interval: Edit `rotateIntervalSeconds` in `src/scripts/hero.js` (line 15)
- Gallery carousel interval: Edit `carouselInterval` in `src/scripts/carousel.js` (line 9) - default is 2800ms
- Gradient animation: Edit `animation` duration in `src/styles/main.css` (line 77)

## 📱 Responsive Breakpoints

- **Desktop**: 992px and above (text left, image right)
- **Tablet**: 768px - 991px
- **Mobile**: Below 768px (image first, then content)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

### Why Two index.html Files?

There are two `index.html` files in the project:

1. **Root `index.html`** (`/index.html` or `/`)
   - This is the **main homepage** of your website
   - Contains: Hero section, About section, Fleet preview section
   - URL: `http://yoursite.com/` or `http://yoursite.com/index.html`

2. **Fleet `index.html`** (`/src/pages/fleet/index.html`)
   - This is the **fleet listing page** showing all vehicles
   - Contains: Complete grid of all 6 fleet vehicles
   - URL: `http://yoursite.com/src/pages/fleet/` or `http://yoursite.com/src/pages/fleet/index.html`

**Why this structure?**
- `index.html` in a folder is a web standard - when you visit a folder URL, the server automatically looks for `index.html`
- This allows clean URLs like `/fleet/` instead of `/fleet.html`
- Each vehicle has its own page (e.g., `innova-crysta.html`) accessible from the fleet listing page

### General Notes

- The navbar is fixed at the top and changes color based on scroll position
- Hero section uses 100vh height on desktop
- About Us section uses 100vh height with layered split layout
- Gallery carousel auto-rotates every 2.8 seconds and pauses on hover
- Mobile layout shows image first, then text content for both sections
- Smooth transitions use CSS variables for performance
- Gallery images should be named sequentially (gallery-1.png, gallery-2.png, etc.)
- Fleet images must use exact filenames as specified in the setup instructions

## 📸 Gallery Setup

**Quick Start:**
1. Add 6-7 PNG images to `src/assets/gallery/` folder
2. Name them: `gallery-1.png`, `gallery-2.png`, `gallery-3.png`, `gallery-4.png`, `gallery-5.png`, `gallery-6.png`, `gallery-7.png`
3. The carousel will automatically detect and display them

**Tips:**
- Use consistent image dimensions for best visual effect
- Recommended aspect ratio: 16:9 or 4:3
- Images will be automatically cropped to fit (object-fit: cover)
- Missing images will be skipped automatically

## 🚗 Fleet Images Setup

**Quick Start:**
1. Add 6 PNG/JPG images to `src/assets/fleet/` folder
2. Use these **exact filenames** (case-sensitive):
   - `innova-crysta.png`
   - `urbania-9.png`
   - `urbania-14.png`
   - `urbania-16.png`
   - `coach-21.png`
   - `coach-40.png`

**Tips:**
- Use consistent image dimensions for best visual effect
- Recommended size: 800x600px or larger
- Recommended aspect ratio: 4:3 or 16:9
- Images will be automatically cropped to fit (object-fit: cover)
- If an image is missing, a placeholder with the vehicle name will be displayed

## 🎯 Complete Image Placement Guide

### All Image Locations

Here's where to place all images used throughout the website:

#### 1. **Logo** (`src/assets/logo/`)
- **File**: `main-logo.png`
- **Size**: Height 50px (width scales proportionally)
- **Format**: PNG or SVG
- **Used in**: Navbar on all pages

#### 1a. **Preloader Logo** (`src/assets/logo/`)
- **File**: `mahendra-travels-logo.png`
- **Size**: Width 340px (height scales proportionally)
- **Format**: PNG (recommended) or SVG
- **Used in**: Preloader animation on homepage
- **Note**: If this file is not found, the system will automatically use `main-logo.png` as fallback. Use a high-resolution logo with white background for best visual effect.

#### 2. **Hero Image** (`src/assets/hero/`)
- **File**: `hero-image.png`
- **Size**: 1200x800px or larger
- **Format**: PNG
- **Used in**: Homepage hero section

#### 3. **Gallery Images** (`src/assets/gallery/`)
- **Files**: `gallery-1.png` through `gallery-7.png`
- **Size**: 1200x800px or larger
- **Format**: PNG
- **Used in**: About section carousel
- **Note**: Name sequentially (gallery-1.png, gallery-2.png, etc.)

#### 4. **Fleet Vehicle Images** (`src/assets/fleet/`)
- **Files** (exact names required):
  - `innova-crysta.png`
  - `urbania-9.png`
  - `urbania-14.png`
  - `urbania-16.png`
  - `coach-21.png`
  - `coach-40.png`
- **Size**: 800x600px or larger
- **Format**: PNG or JPG
- **Used in**: Fleet section cards and vehicle detail pages

#### 5. **Service Icons** (`src/assets/services/`)
- **Files** (exact names required):
  - `city-taxi.png` - City Taxi Rentals service icon
  - `airport.png` - Airport Pickup & Drop service icon
  - `outstation.png` - Outstation Travel service icon
  - `corporate.png` - Corporate & Staff Transport service icon
  - `events.png` - Event & Group Transportation service icon
- **Size**: 60x60px or larger (square format recommended)
- **Format**: PNG or SVG
- **Used in**: Services section cards on homepage and services listing page
- **Note**: If images are missing, Bootstrap Icons will be displayed as fallback

#### 6. **Blog Images** (`src/assets/blogs/`)
- **Files** (exact names required):
  - `innova-mysore.png` - Blog post image for "Innova Taxi from Bangalore to Mysore"
  - `innova-coorg.png` - Blog post image for "Innova Taxi from Bangalore to Coorg"
- **Size**: 1200x600px or larger (landscape format)
- **Format**: PNG (recommended)
- **Used in**: Blog section cards on homepage, blog listing page, and individual blog post pages
- **Note**: If images are missing, a placeholder icon will be displayed

#### 7. **Contact Section Logo** (`src/assets/logo/`)
- **File**: `main-logo.png` (same as navbar logo)
- **Size**: Max width 200px (height scales proportionally)
- **Format**: PNG (with transparency) or SVG
- **Used in**: Contact section on homepage and contact page
- **Note**: The contact section uses the same logo file as the navbar. If you want a different logo for the contact section, you can create a separate file and update the HTML accordingly.

### Image Naming Rules

⚠️ **Important**: Some images require **exact filenames** (case-sensitive):
- Fleet images must match exactly: `innova-crysta.png` (not `Innova-Crysta.png`)
- Service icons must match exactly: `city-taxi.png` (not `city_taxi.png`)
- Blog images must match exactly: `innova-mysore.png` (not `innova_mysore.png`)

### Image Format Recommendations

- **Logos**: PNG (with transparency) or SVG
- **Photos**: JPG (for photos) or PNG (for graphics)
- **Icons**: PNG or SVG (square format, 60x60px minimum)
- **Hero/Gallery**: PNG or JPG (high resolution, 1200px+ width)

### Fallback Behavior

If images are missing:
- **Logo**: Text "MAHENDRA TRAVELS" will be displayed
- **Hero**: SVG placeholder will be displayed
- **Gallery**: Placeholder SVGs will be displayed
- **Fleet**: Vehicle name text will be displayed
- **Services**: Bootstrap Icons will be displayed
- **Blog**: Image icon placeholder will be displayed

## 🔄 Future Enhancements

- Implement booking form
- Add more sections (Contact, etc.)
- Integrate with backend API
- Add image lazy loading for better performance

---

**Built with ❤️ for Mahendra Travels**

