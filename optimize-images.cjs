const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

const imagesToOptimize = [
  { file: 'pba.jpg', maxWidth: 1200, quality: 82 },
  { file: 'gig_selfie.png', maxWidth: 1200, quality: 82 },
  { file: 'red_room.png', maxWidth: 1200, quality: 82 },
  { file: 'iceland.jpeg', maxWidth: 1200, quality: 82 },
  { file: 'iceland_portrait.jpeg', maxWidth: 1200, quality: 82 },
  { file: 'adieu.png', maxWidth: 1200, quality: 82 },
  { file: 'left_with_you.png', maxWidth: 1200, quality: 82 },
  { file: 'genies.jpg', maxWidth: 1200, quality: 82 },
  { file: 'oblivionV2.png', maxWidth: 1200, quality: 82 },
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

      // Resize if needed and optimize
      await image
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({ quality, mozjpeg: true })
        .toFile(inputPath + '.tmp');

      // Replace original with optimized
      fs.renameSync(inputPath + '.tmp', inputPath);

      const outputStats = fs.statSync(inputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${metadata.width}x${metadata.height} -> ${maxWidth}px wide (or original if smaller)`);
      console.log(`  ${inputSizeKB}KB -> ${outputSizeKB}KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
  console.log('Backups saved with .backup extension');
}

optimizeImages().catch(console.error);
