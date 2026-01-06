import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Copy Images directory to dist
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// Copy Images folder from root to public (if not already there)
const imagesSrc = path.join(__dirname, '../Images')
const imagesDestPublic = path.join(__dirname, '../public/Images')

if (fs.existsSync(imagesSrc) && !fs.existsSync(imagesDestPublic)) {
  copyDirectory(imagesSrc, imagesDestPublic)
  console.log('✅ Images copied to public/Images')
} else if (fs.existsSync(imagesDestPublic)) {
  console.log('✅ Images already in public/Images')
} else {
  console.log('⚠️  Images directory not found')
}

// Copy Images from root to dist (for build)
const imagesDest = path.join(__dirname, '../dist/Images')
if (fs.existsSync(imagesSrc)) {
  copyDirectory(imagesSrc, imagesDest)
  console.log('✅ Images copied to dist/Images')
}

