const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');

const imgPath = 'c:\\Users\\DELL\\antigravity\\D-CURE-Plus\\src\\assets\\bottle.png';

async function run() {
  const image = await Jimp.read(imgPath);
  console.log('Bottle dimensions:', image.width, 'x', image.height);
  
  // Sample a few pixels at the corners
  const corners = [
    [0, 0],
    [image.width - 1, 0],
    [0, image.height - 1],
    [image.width - 1, image.height - 1],
    [10, 10]
  ];
  
  for (const [x, y] of corners) {
    const pixel = image.getPixelColor(x, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    const a = pixel & 0xff;
    console.log(`Pixel at (${x},${y}): R=${r}, G=${g}, B=${b}, A=${a}`);
  }
}

run().catch(console.error);
