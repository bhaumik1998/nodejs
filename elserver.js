const http = require('http');

const server = http.createServer((req,res) => {

    if(req.url === './elserver.js'){

        console.log('Messi is the best');
res.end('Neymar from barcelona');


    }
});

server.listen(5500 , ()=> {
    console.log('Hey there listeninf to server : 5000 ')
})