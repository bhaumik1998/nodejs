

const path = require('path')

const filePath = path.join('/current','subfolder','text.txt');
console.log(filePath);

const base = path.base(filePath);
console.log(base);