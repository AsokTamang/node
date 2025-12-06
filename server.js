import http from 'http'

const server=http.createServer((req,res)=>   
    res.end('Hello from the server.')  //here we are sending the response of this message using the server created from the http module
)

server.listen(8000,()=>console.log('server is running at the port 8000'))  //and our server is running at port 8000