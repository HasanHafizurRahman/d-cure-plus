const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');

const imgPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\5a94fb39-644c-4a67-a96c-98230a35682d\\media__1781080973008.png';

async function run() {
  const image = await Jimp.read(imgPath);
  const w = image.width;
  const h = image.height;

  // Let's find columns where there is a white card (e.g. RGB is very bright)
  // or let's just scan pixels.
  // The background seems to be a light grey color. Let's sample the top-left corner (0,0) to see what the background color is.
  const bgPixel = image.getPixelColor(10, 10); // get pixel at 10,10
  const bgR = (bgPixel >> 24) & 0xff;
  const bgG = (bgPixel >> 16) & 0xff;
  const bgB = (bgPixel >> 8) & 0xff;
  console.log(`Background color at (10,10): R=${bgR}, G=${bgG}, B=${bgB}`);

  // Let's find the bounding box of pixels that are significantly different from the background color, in the left half of the image (x < w/2).
  // Or rather, let's find the white card. Let's look for pixels where R, G, B are all > 250 (white card)
  // or let's scan for any card borders.
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w / 2; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      // Let's check if it is part of the card. The card has a white background (255, 255, 255)
      // and contains the doctor. Let's see if the pixel differs from the background color.
      // If the difference is > 10, it's not the background.
      const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
      if (diff > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Card bounding box: X=[${minX}, ${maxX}], Y=[${minY}, ${maxY}]`);
  
  // Let's crop the image using the bounding box (with a bit of margin)
  // and save it as public/assets/doctor.png in the project.
}

run().catch(console.error);
