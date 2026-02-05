import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.join(__dirname, '../Images')
const outputDir = path.join(__dirname, '../public/Images')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const processImage = async (filePath, outputPath) => {
  try {
    // Get file stats
    const stats = fs.statSync(filePath)
    const originalSize = stats.size

    // Compress and convert to WebP
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'))

    // Also create optimized JPEG/PNG
    const ext = path.extname(filePath).toLowerCase()
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath)
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(outputPath)
    }

    const newStats = fs.statSync(outputPath)
    const newSize = newStats.size
    const savings = ((originalSize - newSize) / originalSize) * 100

    console.log(`✅ Optimized: ${path.basename(filePath)} (${(savings).toFixed(1)}% smaller)`)
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
  }
}

const processDirectory = async (dir, outputDir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const outputPath = path.join(outputDir, entry.name)

    if (entry.isDirectory()) {
      const subOutputDir = path.join(outputDir, entry.name)
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true })
      }
      await processDirectory(fullPath, subOutputDir)
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      await processImage(fullPath, outputPath)
    }
  }
}

const main = async () => {
  console.log('🖼️  Starting image optimization...')
  
  if (!fs.existsSync(imagesDir)) {
    console.log('⚠️  Images directory not found, skipping optimization')
    return
  }

  await processDirectory(imagesDir, outputDir)
  console.log('✅ Image optimization complete!')
}

main().catch(console.error)









