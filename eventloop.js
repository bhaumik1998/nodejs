const fs = require('fs');

console.log('Hello world');


fs.readFile('./current/first.txt','utf-8',(err,result) =>{
    if(err){
        console.log(err);

        return;
    }

    else {
        console.log(result)
        console.log("completed first task");
        return;
    }
   
    

});

console.log("next task");
