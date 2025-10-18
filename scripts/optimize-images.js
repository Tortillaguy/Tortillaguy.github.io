import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');
const OUTPUT_DIR = join(__dirname, '../public/assets/optimized');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  const files = await readdir(ASSETS_DIR);

  for (const file of files) {
    const ext = extname(file).toLowerCase();

    if (!IMAGE_EXTENSIONS.includes(ext)) {
      continue;
    }

    const inputPath = join(ASSETS_DIR, file);
    const outputName = basename(file, ext) + '.webp';
    const outputPath = join(OUTPUT_DIR, outputName);

    try {
      console.log(`Converting ${file} to WebP...`);

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = await sharp(inputPath).metadata();
      const outputStats = await sharp(outputPath).metadata();

      console.log(`✓ ${file} (${stats.size} bytes) -> ${outputName} (${outputStats.size} bytes)`);
    } catch (error) {
      console.error(`✗ Failed to convert ${file}:`, error.message);
    }
  }

  console.log('\n✅ Image optimization complete!');
}

optimizeImages().catch(console.error);
