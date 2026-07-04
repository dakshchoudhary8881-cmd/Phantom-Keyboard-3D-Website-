# Phantom X75 Mechanical Keyboard Website

A premium, production-ready Next.js 14 e-commerce website for the Phantom X75 mechanical keyboard with scrollytelling animation and glassmorphism design.

## Features

- **Frame-by-Frame Animation**: 120 WebP frames with scroll-controlled canvas animation
- **Glassmorphism UI**: Modern frosted glass design with blur effects
- **Framer Motion Animations**: Smooth, professional micro-interactions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Dark Theme**: Premium futuristic aesthetic with RGB accents
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Performance**: Static export ready, optimized images, lazy loading

## Tech Stack

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **HTML5 Canvas**: High-performance frame animation

## Project Structure

```
phantom-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ScrollCanvas.tsx    # Canvas frame animation
│   ├── ScrollOverlay.tsx   # Overlay text during scroll
│   ├── ProductDetails.tsx  # Features grid
│   ├── TechSpecs.tsx       # Technical specifications
│   ├── BuySection.tsx      # Purchase customization
│   └── Footer.tsx          # Footer with newsletter
├── data/
│   └── products.ts         # Product data configuration
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Global styles and animations
├── public/
│   └── images/
│       └── phantom/        # 120 frame WebP images
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Installation & Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Add Frame Images**
- Place 120 WebP frame images in `public/images/phantom/`
- Name them: `000.webp`, `001.webp`, ... `119.webp`
- Alternatively, use JPG format if WebP is unavailable

3. **Development Server**
```bash
npm run dev
```
Visit `http://localhost:3000`

4. **Build for Production**
```bash
npm run build
npm start
```

5. **Static Export**
```bash
npm run export
```

## Customization

### Colors
Edit `tailwind.config.ts`:
- `phantom-dark`: `#0F172A` (Background)
- `phantom-cyan`: `#00E5FF` (Primary accent)
- `phantom-purple`: `#B026FF` (Secondary accent)
- `phantom-accent`: `#FF006E` (Accent)

### Product Data
Edit `data/products.ts` to customize:
- Product name and specifications
- Features and tech specs
- Price and switch options
- Overlay text during scroll animation

### Frame Count
Edit `app/page.tsx` line 14 to adjust frame count (default: 120)

## Performance Optimizations

- ✅ Image lazy loading with canvas
- ✅ Optimized scroll event handling
- ✅ CSS-based animations where possible
- ✅ Framer Motion GPU acceleration
- ✅ Static HTML export ready
- ✅ Minimal JavaScript bundle

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Static Export
```bash
npm run export
# Deploy the `out` folder to any static host
```

### Docker
```bash
docker build -t phantom-keyboard .
docker run -p 3000:3000 phantom-keyboard
```

## SEO Features

- ✅ Meta tags and Open Graph
- ✅ Structured data (sitemap.ts)
- ✅ Robots.txt configuration
- ✅ Mobile-optimized
- ✅ Fast page load times

## License

© 2024 Phantom Keyboards. All rights reserved.

## Support

For issues and feature requests, please contact support@phantomkeyboards.com
