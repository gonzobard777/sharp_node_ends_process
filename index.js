// const canvas = require('canvas');
const sharp = require("sharp");
const {resolve} = require('path');

console.log('before\n');

sharp(resolve('.', 'assets', 'sharp.png'))
  .png()
  .toFile(resolve('.', 'assets', 'check_check.png'), (err, info) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('success', info);
    }
  });

setTimeout(() => {
  console.log('\nafter');
}, 500);

