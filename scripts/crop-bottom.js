import sharp from 'sharp';
import path from 'path';

const sourceImg = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/.user_uploaded/media_1791955040325_4f16c2d4.jpg';
const outputDir = 'd:/Proyek/temu-sewa/public/brand';

async function cropBottomRegion() {
  await sharp(sourceImg)
    .extract({
      left: 0,
      top: 500,
      width: 1024,
      height: 524
    })
    .toFile(path.join(outputDir, 'bottom-region.png'));
  console.log('bottom-region.png saved');
}

cropBottomRegion();
