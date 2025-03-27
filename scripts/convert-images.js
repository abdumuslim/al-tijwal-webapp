import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, '../public/lovable-uploads');

async function convertImages() {
  console.log(`Scanning directory: ${imageDir}`);
  try {
    const files = await fs.readdir(imageDir);
    const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));

    if (imageFiles.length === 0) {
      console.log('No PNG or JPG images found to convert.');
      return;
    }

    console.log(`Found ${imageFiles.length} images to convert.`);

    for (const file of imageFiles) {
      const inputPath = path.join(imageDir, file);
      const outputFileName = `${path.parse(file).name}.webp`;
      const outputPath = path.join(imageDir, outputFileName);

      try {
        console.log(`Converting ${file} to ${outputFileName}...`);
        await sharp(inputPath)
          .webp({ quality: 80 }) // Adjust quality as needed (0-100)
          .toFile(outputPath);
        console.log(`Successfully converted ${file} to ${outputFileName}`);
        // Optional: Delete original file after conversion
        // await fs.unlink(inputPath);
        // console.log(`Deleted original file: ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
    console.log('Image conversion process finished.');
  } catch (err) {
    console.error(`Error reading directory ${imageDir}:`, err);
  }
}

convertImages();