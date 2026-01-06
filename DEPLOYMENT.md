# Deployment Guide

This guide covers deploying the Golden Furniture website to Netlify or Vercel.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Account on Netlify or Vercel

## Environment Variables

Copy `env.example` to `.env` and fill in your values:

```bash
cp env.example .env
```

Required environment variables:
- `VITE_BASE_URL` - Your production domain (e.g., https://www.goldenfurniture.com)
- `VITE_GA_TRACKING_ID` - Google Analytics tracking ID (optional)
- `VITE_FB_PIXEL_ID` - Facebook Pixel ID (optional)

## Build Commands

### Development Build
```bash
npm run build
```

### Production Build (with image optimization)
```bash
npm run build:production
```

This will:
1. Optimize images (compress and convert to WebP)
2. Build the application
3. Generate sitemap.xml

## Netlify Deployment

1. **Connect Repository**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect repository to Netlify

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Environment Variables**
   - Add all variables from `.env` in Netlify dashboard
   - Go to Site settings → Environment variables

4. **Deploy**
   - Netlify will automatically deploy on push to main branch
   - Or trigger manual deploy from dashboard

The `netlify.toml` file is already configured with:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache headers for static assets

## Vercel Deployment

1. **Connect Repository**
   - Push your code to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard

2. **Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   - Add all variables from `.env` in Vercel dashboard
   - Go to Project Settings → Environment Variables

4. **Deploy**
   - Vercel will automatically deploy on push
   - Or trigger manual deploy from dashboard

The `vercel.json` file is already configured with:
- Build settings
- Rewrite rules for SPA routing
- Security headers
- Cache headers for static assets

## Post-Deployment Checklist

- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Check robots.txt at `/robots.txt`
- [ ] Test all routes work correctly
- [ ] Verify analytics tracking (if configured)
- [ ] Test PWA installation on mobile
- [ ] Check image optimization
- [ ] Verify HTTPS is enabled
- [ ] Test performance with Lighthouse

## Image Optimization

Images are automatically optimized during build:
- Converted to WebP format
- Compressed with quality 85
- Original formats preserved as fallback

To optimize images manually:
```bash
npm run optimize:images
```

## Sitemap Generation

Sitemap is automatically generated during build. To generate manually:
```bash
npm run generate:sitemap
```

The sitemap will be available at `/sitemap.xml` after deployment.

## Performance Optimization

The build includes:
- Code splitting (vendor, animations chunks)
- Gzip and Brotli compression
- Tree shaking
- Minification with Terser
- Console removal in production

## PWA Support

The site is configured as a Progressive Web App:
- Service Worker for offline support
- Web App Manifest
- Installable on mobile devices

## Analytics

Analytics are configured but require environment variables:
- Google Analytics: Set `VITE_GA_TRACKING_ID`
- Facebook Pixel: Set `VITE_FB_PIXEL_ID`

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure images are in `/Images` directory
- Check image paths in components
- Verify images are copied to `dist` during build

### SPA Routing Issues
- Verify redirect/rewrite rules in `netlify.toml` or `vercel.json`
- Check that all routes return `index.html`

### Analytics Not Working
- Verify environment variables are set
- Check browser console for errors
- Ensure tracking IDs are correct







