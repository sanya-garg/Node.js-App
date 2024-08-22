const express = require('express');
//const http = require('http');

const app = express();

app.get('/',(req, res)=>{
    return res.send('hello from page hey' + req.query.name);
})


// You do not need http module to create server, express already includes it
app.listen(3000,()=>{console.log('server started')});
//const server = http.createServer(app);

// server.listen(3000, ()=>{
//     console.log('Server started');
// })