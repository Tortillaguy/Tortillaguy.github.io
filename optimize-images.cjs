const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

const imagesToOptimize = [
  { file: 'seismic.png', maxWidth: 800, quality: 80 },
  { file: 'hardstyle.jpg', maxWidth: 800, quality: 80 },
  { file: 'renegade.png', maxWidth: 800, quality: 80 },
  { file: 'iceland_portrait.jpeg', maxWidth: 600, quality: 80 },
  { file: 'pba.jpg', maxWidth: 800, quality: 80 },
  { file: 'love_oasis.jpg', maxWidth: 800, quality: 80 },
  { file: 'crssd.jpg', maxWidth: 800, quality: 80 },
  { file: 'lkg.jpg', maxWidth: 800, quality: 80 },
  { file: 'pokemoon.png', maxWidth: 800, quality: 80 },
  { file: 'proper_2025.webp', maxWidth: 800, quality: 80 },
  { file: 'disguise.jpg', maxWidth: 800, quality: 80 },
  { file: 'sword_pyro.jpg', maxWidth: 800, quality: 80 },
  { file: 'gig_selfie.png', maxWidth: 320, quality: 80 },
  { file: 'infinite-reality.jpg', maxWidth: 800, quality: 80 },
  { file: 'red_room.png', maxWidth: 800, quality: 80 },
  { file: 'adieu.png', maxWidth: 800, quality: 80 },
  { file: 'left_with_you.png', maxWidth: 800, quality: 80 },
  { file: 'oblivionV2.png', maxWidth: 800, quality: 80 },
  { file: 'parcel3.jpg', maxWidth: 800, quality: 80 },
  { file: 'magicleap.png', maxWidth: 800, quality: 80 },
  { file: 'hand_pyro.jpg', maxWidth: 800, quality: 80 },
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const { file, maxWidth, quality } of imagesToOptimize) {
    const inputPath = path.join(assetsDir, file);
    const backupPath = path.join(assetsDir, `${file}.backup`);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${file} - file not found`);
      continue;
    }

    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    // Create backup
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      const ext = path.extname(file).toLowerCase();

      // Convert to WebP for better compression
      const webpFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const webpPath = path.join(assetsDir, webpFile);

      // Resize and convert to WebP
      await image
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: quality + 5 }) // Slightly higher quality for WebP
        .toFile(webpPath);

      // Also optimize original format
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(inputPath)
          .resize(maxWidth, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .jpeg({ quality, mozjpeg: true })
          .toFile(inputPath + '.tmp');
        fs.renameSync(inputPath + '.tmp', inputPath);
      } else if (ext === '.png') {
        await sharp(inputPath)
          .resize(maxWidth, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .png({ quality, compressionLevel: 9 })
          .toFile(inputPath + '.tmp');
        fs.renameSync(inputPath + '.tmp', inputPath);
      }

      const outputStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(webpPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const webpSizeKB = (webpStats.size / 1024).toFixed(2);
      const reduction = ((1 - webpStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${metadata.width}x${metadata.height} -> ${maxWidth}px wide (or original if smaller)`);
      console.log(`  Original: ${inputSizeKB}KB -> ${outputSizeKB}KB`);
      console.log(`  WebP: ${webpSizeKB}KB (${reduction}% reduction from original)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
  console.log('Backups saved with .backup extension');
}

optimizeImages().catch(console.error);
