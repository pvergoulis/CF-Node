const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
  if(req){
    console.log("A Request")
    res.statusCode = 200
    res.setHeader('Content-Type', 'Text/plain')
    res.end('Hello world\n')
  }
})

server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}`)
})