import QRCode from 'qrcode';
import path from 'path';

const liveUrl = 'http://192.168.18.234:3000/';
const outputPath = 'd:/Proyek/temu-sewa/public/qr-access.png';
const artifactPath = 'C:/Users/ASUS/.gemini/antigravity/brain/a5493d08-2854-46f4-928c-5cb154e57f5d/qr-access.png';

async function generateQR() {
  await QRCode.toFile(outputPath, liveUrl, {
    width: 320,
    margin: 2,
    color: {
      dark: '#0D2C54', // Navy TemuSewa
      light: '#FFFFFF'
    }
  });

  await QRCode.toFile(artifactPath, liveUrl, {
    width: 320,
    margin: 2,
    color: {
      dark: '#0D2C54',
      light: '#FFFFFF'
    }
  });

  console.log('QR Code generated at:', outputPath, 'and', artifactPath);
}

generateQR();
