const http = require('http');
const file = require('fs');

const myServer = http.createServer((req,res)=>{
    const log = `${new Date()} : ${req.url} : New Incoming request`;
    file.appendFile('.log.txt',log,(err,result)=>{
        res.end('Server request completed');
    })
})

myServer.listen(8000,()=>{console.log('server request started')});