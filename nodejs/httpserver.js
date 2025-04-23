const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statuscode = 200;
    res.setHeader = ('content-type','text/html');
    res.end('<h1> Hello this is sony </h1> <p>Hey I am from sambalpur!</P>');
});

server.listen(port,()=>{
console.log(`server is listening on port ${port}`);
});
