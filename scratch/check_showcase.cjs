const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');

const imgPath = 'c:\\Users\\DELL\\antigravity\\D-CURE-Plus\\src\\assets\\product_showcase.jpg';

async function run() {
  const image = await Jimp.read(imgPath);
  console.log('Showcase dimensions:', image.width, 'x', image.height);
}

run().catch(console.error);
