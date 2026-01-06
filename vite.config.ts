import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Plugin to copy Images folder from root to public
const copyImagesPlugin = () => {
  return {
    name: 'copy-images',
    configureServer() {
      // Copy Images to public during dev server startup
      const imagesSrc = join(process.cwd(), 'Images')
      const imagesDest = join(process.cwd(), 'public', 'Images')
      
      if (existsSync(imagesSrc)) {
        const copyDir = (src: string, dest: string) => {
          if (!existsSync(dest)) {
            mkdirSync(dest, { recursive: true })
          }
          const entries = readdirSync(src, { withFileTypes: true })
          for (const entry of entries) {
            const srcPath = join(src, entry.name)
            const destPath = join(dest, entry.name)
            if (entry.isDirectory()) {
              copyDir(srcPath, destPath)
            } else {
              if (!existsSync(destPath)) {
                copyFileSync(srcPath, destPath)
              }
            }
          }
        }
        copyDir(imagesSrc, imagesDest)
      }
    },
    buildStart() {
      // Also copy during build
      const imagesSrc = join(process.cwd(), 'Images')
      const imagesDest = join(process.cwd(), 'public', 'Images')
      
      if (existsSync(imagesSrc)) {
        const copyDir = (src: string, dest: string) => {
          if (!existsSync(dest)) {
            mkdirSync(dest, { recursive: true })
          }
          const entries = readdirSync(src, { withFileTypes: true })
          for (const entry of entries) {
            const srcPath = join(src, entry.name)
            const destPath = join(dest, entry.name)
            if (entry.isDirectory()) {
              copyDir(srcPath, destPath)
            } else {
              copyFileSync(srcPath, destPath)
            }
          }
        }
        copyDir(imagesSrc, imagesDest)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/GoldenWebsite/' : '/',
  plugins: [
    copyImagesPlugin(),
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'manifest.json'],
      manifest: {
        name: 'Golden Furniture',
        short_name: 'Golden',
        description: 'Premium furniture store in Tel Aviv, Israel',
        theme_color: '#d97706',
        icons: [
          {
            src: '/Images/logo.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          {
            src: '/Images/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
})
