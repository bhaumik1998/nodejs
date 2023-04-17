const fs = require('fs').promises;


const start = async ()=>{

try{
    const first = await fs.readFile('./current/first.txt','utf-8')
    const second = await fs.readFile('./current/text.txt','utf-8')
    
    await fs.writeFile('./current/result2.txt',`This is awesomne ${first} ${second}`,{flag : 'a'})

}

catch{
console.log(err);

}

}


start();