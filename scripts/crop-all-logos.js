import sharp from 'sharp';
import path from 'path';

const sourceImg = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/.user_uploaded/media_1791955040325_4f16c2d4.jpg';
const outputDir = 'd:/Proyek/temu-sewa/public/brand';

// Helper to make white background transparent
async function makeWhiteTransparent(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // If pixel is near-white (background)
    if (r >= 245 && g >= 245 && b >= 245) {
      data[i + 3] = 0; // Alpha 0
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png();
}

async function extractAll() {
  console.log('Extracting official brand assets...');

  // 1. Full Main Horizontal Logo (Top Header)
  // In header-region (width: 930, height: 480 from left: 50, top: 0):
  // Logo is roughly x: 70 to 920, y: 100 to 420
  const headerBuf = await sharp(sourceImg)
    .extract({
      left: 70,
      top: 100,
      width: 860,
      height: 320
    })
    .toBuffer();

  const fullTransparent = await makeWhiteTransparent(headerBuf);
  await fullTransparent
    .trim()
    .toFile(path.join(outputDir, 'logo-full.png'));
  console.log('Saved: logo-full.png (transparent)');

  // 2. Just the Symbol (top left symbol)
  const symbolBuf = await sharp(sourceImg)
    .extract({
      left: 80,
      top: 120,
      width: 200,
      height: 250
    })
    .toBuffer();

  const symbolTransparent = await makeWhiteTransparent(symbolBuf);
  await symbolTransparent
    .trim()
    .toFile(path.join(outputDir, 'logo-symbol.png'));
  console.log('Saved: logo-symbol.png (transparent)');

  // 3. Wordmark Only ("TemuSewa" + Tagline)
  const wordmarkBuf = await sharp(sourceImg)
    .extract({
      left: 310,
      top: 180,
      width: 620,
      height: 220
    })
    .toBuffer();

  const wordmarkTransparent = await makeWhiteTransparent(wordmarkBuf);
  await wordmarkTransparent
    .trim()
    .toFile(path.join(outputDir, 'logo-wordmark.png'));
  console.log('Saved: logo-wordmark.png (transparent)');

  // 4. Wordmark without tagline ("TemuSewa" only, from bottom WORDMARK section)
  // In original image: x: 230 to 480, y: 550 to 720
  const pureWordmarkBuf = await sharp(sourceImg)
    .extract({
      left: 230,
      top: 570,
      width: 260,
      height: 120
    })
    .toBuffer();

  const pureWordmarkTransparent = await makeWhiteTransparent(pureWordmarkBuf);
  await pureWordmarkTransparent
    .trim()
    .toFile(path.join(outputDir, 'logo-wordmark-only.png'));
  console.log('Saved: logo-wordmark-only.png (transparent)');

  // 5. Versi Background Gelap (Dark Navy rounded card at bottom right)
  // In original image: left: 470, top: 760, width: 520, height: 230
  await sharp(sourceImg)
    .extract({
      left: 470,
      top: 760,
      width: 520,
      height: 230
    })
    .trim()
    .toFile(path.join(outputDir, 'logo-dark.png'));
  console.log('Saved: logo-dark.png');

  // 6. App Icon (Ikon App at bottom left)
  await sharp(sourceImg)
    .extract({
      left: 60,
      top: 780,
      width: 130,
      height: 140
    })
    .trim()
    .toFile(path.join(outputDir, 'logo-app-icon.png'));
  console.log('Saved: logo-app-icon.png');

  // 7. App Icon White (Ikon App Putih at bottom)
  await sharp(sourceImg)
    .extract({
      left: 250,
      top: 780,
      width: 140,
      height: 140
    })
    .trim()
    .toFile(path.join(outputDir, 'logo-app-icon-white.png'));
  console.log('Saved: logo-app-icon-white.png');

  console.log('ALL BRAND ASSETS EXTRACTED SUCCESSFULLY!');
}

extractAll().catch(err => {
  console.error('Error during extraction:', err);
});
