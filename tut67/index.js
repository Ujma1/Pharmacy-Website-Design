const fs= require("fs");
const http = require("http");
const { hostname } = require("os");

const hostname= '127.0.0.1';
const port= 8000;

const Home= fs.readFileSync("./index.html","utf-8");
const services = fs.readFileSync("./services.html" , "utf-8");
const about_us = fs.readFileSync("./about.html", "utf-8");
const contact =fs. readFileSync('./contact.html' , "utf-8");


const server= http.createServer((req,res) =>{
    url=req.url;
    console.log(req.url);

    res.statusCode =200;
    res.setHeader("Content-type" ,"text/html");
    if(url='/index'){
        res.end("/");
    } 
    else if(url='/about'){
        res.end("About");
    }
    else if(url='/services'){
        res.end("services");
    }
    else if(url='/contact'){
        res.end('/contact');
    }
    else{
        res.end('<h1>404 error page not found</h1>' );
       }

});

server.listen(port , hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})