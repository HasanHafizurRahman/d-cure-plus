const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');

const imgPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\5a94fb39-644c-4a67-a96c-98230a35682d\\media__1781080973008.png';

async function run() {
  const image = await Jimp.read(imgPath);
  const w = image.width;
  const h = image.height;

  // Let's find pixels in the left half that are pure white (255, 255, 255)
  // to identify the boundaries of the white card.
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w / 2; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      if (r === 255 && g === 255 && b === 255) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Pure white pixels bounding box: X=[${minX}, ${maxX}], Y=[${minY}, ${maxY}]`);
}

run().catch(console.error);
