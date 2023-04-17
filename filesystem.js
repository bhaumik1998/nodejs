const fs = require('fs');

const read1 = fs.readFileSync('./current/first.txt','utf-8')
const read2 = fs.readFileSync('./message.txt','utf-8')
console.log(read1)

fs.writeFileSync('Message.txt','Vivian aka Divine' );



console.log(read2)
