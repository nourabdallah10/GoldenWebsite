# Golden Furniture Website

A modern, responsive furniture e-commerce website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Animations**: Framer Motion for smooth animations
- **Styling**: Tailwind CSS with custom configuration
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Localization**: Hebrew/English support with RTL/LTR switching
- **PWA**: Progressive Web App with offline support
- **SEO**: Dynamic meta tags, sitemap, robots.txt
- **Performance**: Image optimization, lazy loading, code splitting
- **Analytics**: Google Analytics & Facebook Pixel support

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:production` - Build with image optimization
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run generate:sitemap` - Generate sitemap.xml
- `npm run optimize:images` - Optimize images

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
VITE_BASE_URL=https://www.goldenfurniture.com
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── contexts/      # React contexts
├── assets/        # Static assets
└── styles/        # Global styles
```

## 🎨 Customization

### Colors
Primary colors are configured in `tailwind.config.js`:
- Primary: `amber-600` (#d97706)
- Secondary: `slate-900` (#0f172a)

### Fonts
Default font: `'Gotham', 'Verdana', sans-serif`

### Animations
Custom animations defined in `tailwind.config.js`:
- `fadeIn` - Fade in effect
- `slideUp` - Slide up animation
- `scaleHover` - Scale on hover

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

**Netlify:**
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

**Vercel:**
1. Import project
2. Framework: Vite
3. Auto-detects settings from `vercel.json`

## 📱 PWA Support

The site is configured as a Progressive Web App:
- Installable on mobile devices
- Offline support via Service Worker
- App-like experience

## 🔍 SEO

- Dynamic meta tags per page
- Sitemap.xml generation
- Robots.txt configuration
- Open Graph tags
- Twitter Card support

## 📊 Analytics

Analytics are configured but require environment variables:
- Google Analytics: Set `VITE_GA_TRACKING_ID`
- Facebook Pixel: Set `VITE_FB_PIXEL_ID`

## 🎯 Performance

- Image lazy loading
- Code splitting
- Gzip/Brotli compression
- Tree shaking
- Minification

## 📄 License

Private - Golden Furniture
