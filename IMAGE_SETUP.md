# Image Setup Guide

## Current Structure

Your images are located in the `/Images` folder at the root of the project:
```
Images/
├── logo.jpg
├── Sofas/
│   └── [1-122].jpg
├── Beds/
│   └── [1-57].jpg
├── icons-aboutus/
└── icons-categories/
```

## How It Works

1. **Development**: The Vite plugin automatically copies `/Images` to `/public/Images` so images are accessible at `/Images/` path
2. **Build**: The `copy-assets` script copies `/Images` to `/dist/Images` during build
3. **All Components**: Use `/Images/` path (e.g., `/Images/logo.jpg`, `/Images/Sofas/1.jpg`)

## Image Paths in Code

All components now use the correct paths:
- ✅ `/Images/logo.jpg` - Logo
- ✅ `/Images/Sofas/1.jpg` - Sofa images
- ✅ `/Images/Beds/1.jpg` - Bed images
- ✅ `/Images/Tables/1.jpg` - Table images (if you add them)

## No Changes Needed

You can keep your `/Images` folder exactly where it is. The build process will:
- Copy it to `public/Images` for development
- Copy it to `dist/Images` for production
- All paths using `/Images/` will work correctly

## Adding New Images

1. Add images to `/Images/[category]/` folder
2. Reference them in code as `/Images/[category]/filename.jpg`
3. They will automatically be available after build

## Image Optimization

Run `npm run optimize:images` to:
- Compress images
- Convert to WebP format
- Optimize file sizes

Optimized images will be saved to `public/Images` (if you want to use optimized versions).







