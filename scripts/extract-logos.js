import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImg = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/.user_uploaded/media_1791955040325_4f16c2d4.jpg';
const outputDir = 'd:/Proyek/temu-sewa/public/brand';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function inspectAndExtract() {
  const metadata = await sharp(sourceImg).metadata();
  console.log('Image dimensions:', metadata.width, 'x', metadata.height);

  // 1. Full primary horizontal logo (Symbol + Wordmark + Tagline at the top)
  // Symbol is around x: 120, y: 150, width: 180, height: 230
  // "TemuSewa" wordmark is from x: 330 to 920, y: 200 to 330
  // Tagline is below wordmark from x: 350 to 800, y: 340 to 380
  await sharp(sourceImg)
    .extract({
      left: 110,
      top: 140,
      width: 820,
      height: 250
    })
    .trim()
    .toFile(path.join(outputDir, 'temusewa-full.png'));
  console.log('1. temusewa-full.png saved');

  // 2. Just the symbol mark (top left)
  await sharp(sourceImg)
    .extract({
      left: 115,
      top: 145,
      width: 190,
      height: 240
    })
    .trim()
    .toFile(path.join(outputDir, 'temusewa-symbol.png'));
  console.log('2. temusewa-symbol.png saved');

  // 3. Just the wordmark ("TemuSewa" + tagline)
  await sharp(sourceImg)
    .extract({
      left: 330,
      top: 200,
      width: 600,
      height: 180
    })
    .trim()
    .toFile(path.join(outputDir, 'temusewa-wordmark.png'));
  console.log('3. temusewa-wordmark.png saved');

  // 4. Dark background logo card (bottom right)
  // It is the dark navy rounded rectangle at bottom right
  await sharp(sourceImg)
    .extract({
      left: 470,
      top: 780,
      width: 530,
      height: 210
    })
    .trim()
    .toFile(path.join(outputDir, 'temusewa-dark.png'));
  console.log('4. temusewa-dark.png saved');

  // 5. App Icon (White on green icon, around x: 250 to 390, y: 800 to 940)
  await sharp(sourceImg)
    .extract({
      left: 250,
      top: 800,
      width: 150,
      height: 150
    })
    .trim()
    .toFile(path.join(outputDir, 'temusewa-app-icon.png'));
  console.log('5. temusewa-app-icon.png saved');

  console.log('All official brand assets successfully extracted!');
}

inspectAndExtract().catch(err => {
  console.error('Error extracting:', err);
});
