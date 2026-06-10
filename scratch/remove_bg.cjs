const { Jimp } = require('c:/Users/DELL/antigravity/D-CURE-Plus/node_modules/jimp');
const fs = require('fs');

const imgPath = 'c:\\Users\\DELL\\antigravity\\D-CURE-Plus\\src\\assets\\bottle.png';
const destPath = 'c:\\Users\\DELL\\antigravity\\D-CURE-Plus\\src\\assets\\bottle_transparent.png';

async function run() {
  const image = await Jimp.read(imgPath);
  const w = image.width;
  const h = image.height;
  
  // Create a copy to work on
  const outputImage = image.clone();
  
  // Keep track of visited pixels
  const visited = new Uint8Array(w * h);
  
  // Queue for BFS
  const queue = [];
  
  // Starting seeds: all pixels along the borders
  for (let x = 0; x < w; x++) {
    queue.push([x, 0]);
    queue.push([x, h - 1]);
    visited[0 * w + x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 1; y < h - 1; y++) {
    queue.push([0, y]);
    queue.push([w - 1, y]);
    visited[y * w + 0] = 1;
    visited[y * w + (w - 1)] = 1;
  }
  
  // Helper to check color similarity (distance in RGB space)
  // The background is close to white (255, 255, 255)
  function isBgColor(r, g, b) {
    // If it's very bright (all channels > 240)
    // Or if it's close to the top-left corner pixel color
    return r > 240 && g > 240 && b > 240;
  }
  
  let transparentCount = 0;
  
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    
    const pixel = image.getPixelColor(cx, cy);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    if (isBgColor(r, g, b)) {
      // Set to transparent in output
      // Jimp: setPixelColor(rgba, x, y)
      // rgba = 0x00000000 (fully transparent black)
      outputImage.setPixelColor(0x00000000, cx, cy);
      transparentCount++;
      
      // Add neighbors
      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1]
      ];
      
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const idx = ny * w + nx;
          if (visited[idx] === 0) {
            visited[idx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  
  console.log(`Made ${transparentCount} pixels transparent out of ${w * h}`);
  
  // Let's also trim the empty space around the bottle to make it tighter!
  // To do this, find the bounding box of non-transparent pixels in outputImage
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pixel = outputImage.getPixelColor(x, y);
      const a = pixel & 0xff;
      if (a > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log(`Non-transparent bounding box: X=[${minX}, ${maxX}], Y=[${minY}, ${maxY}]`);
  
  if (maxX > minX && maxY > minY) {
    // Add small padding of 10px
    const pad = 10;
    const cropX = Math.max(0, minX - pad);
    const cropY = Math.max(0, minY - pad);
    const cropW = Math.min(w - cropX, (maxX - minX) + 2 * pad);
    const cropH = Math.min(h - cropY, (maxY - minY) + 2 * pad);
    
    console.log(`Cropping to X:${cropX}, Y:${cropY}, W:${cropW}, H:${cropH}`);
    const cropped = outputImage.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    await cropped.write(destPath);
  } else {
    await outputImage.write(destPath);
  }
  
  console.log('Successfully saved transparent image to:', destPath);
}

run().catch(console.error);
