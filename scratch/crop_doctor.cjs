const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');
const fs = require('fs');
const path = require('path');

const imgPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\5a94fb39-644c-4a67-a96c-98230a35682d\\media__1781080973008.png';
const destDir = 'c:\\Users\\DELL\\antigravity\\D-CURE-Plus\\src\\assets';
const destPath = path.join(destDir, 'doctor.png');

async function run() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const image = await Jimp.read(imgPath);
  
  // Crop the full left column. The total width is 958.
  // The left column should be around 480 or 485 pixels.
  // Let's crop x: 0, y: 0, w: 485, h: 611 to make sure the entire card,
  // including its right shadow and margin, is fully contained.
  const cropped = image.crop({ x: 0, y: 0, w: 485, h: 611 });
  await cropped.write(destPath);
  console.log('Successfully cropped and saved full card image to:', destPath);
}

run().catch(console.error);
