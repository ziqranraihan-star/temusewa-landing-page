import sharp from 'sharp';
import path from 'path';

const sourceImg = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/.user_uploaded/media_1791955040325_4f16c2d4.jpg';
const outputDir = 'd:/Proyek/temu-sewa/public/brand';

async function cropTopHeader() {
  // Let's crop from y=0 to y=450, x=50 to 980
  await sharp(sourceImg)
    .extract({
      left: 50,
      top: 0,
      width: 930,
      height: 480
    })
    .toFile(path.join(outputDir, 'header-region.png'));
  console.log('header-region.png saved');
}

cropTopHeader();
