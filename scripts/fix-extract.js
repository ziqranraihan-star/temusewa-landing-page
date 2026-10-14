import sharp from 'sharp';
import path from 'path';

const sourceImg = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/.user_uploaded/media_1791955040325_4f16c2d4.jpg';
const outputDir = 'd:/Proyek/temu-sewa/public/brand';

async function makeWhiteTransparent(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= 242 && g >= 242 && b >= 242) {
      data[i + 3] = 0;
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

async function fixExtract() {
  // 1. Symbol with generous margin
  const symbolBuf = await sharp(sourceImg)
    .extract({
      left: 70,
      top: 110,
      width: 230,
      height: 270
    })
    .toBuffer();

  const symTrans = await makeWhiteTransparent(symbolBuf);
  await symTrans.trim().toFile(path.join(outputDir, 'logo-symbol.png'));
  console.log('logo-symbol.png regenerated with full margins!');

  // 2. Dark Logo (from bottom right of sourceImg)
  // In sourceImg (1024x1024), it is from y=750 to 980, x=460 to 990
  const darkBuf = await sharp(sourceImg)
    .extract({
      left: 460,
      top: 750,
      width: 535,
      height: 235
    })
    .toBuffer();

  // Make white outer border of dark card transparent if any
  const darkTrans = await makeWhiteTransparent(darkBuf);
  await darkTrans.trim().toFile(path.join(outputDir, 'logo-dark.png'));
  console.log('logo-dark.png extracted!');
}

fixExtract();
