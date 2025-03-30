const { create } = require('domain')
const fs = require('fs')
const http = require('http')
const os = require('os')


const osType = os.type()
console.log(osType)

const htmlContent = `
  <!DOCTYPE html>
  <html>
    <h3>Hello, World! Your OS type is ${osType}</h3>
   </html> 
`

const server = http.createServer((req,res)=>{
  console.log("Αρχικά Δημιουργούμε αρχείο index.html με περιεχομενα htmlContent")
  fs.writeFile('./index.html',htmlContent,err=>{
    if(err){
      console.log("Problem in writting file")
    } else {
      console.log('Διαβάζουμε το αρχειο και το στειλνουμε πίσω')
      fs.readFile('index.html','utf-8',(err,content)=>{
        if(err){
          console.log('Problem in reading file', err)
        }
        res.setHeader('Content-Type', 'text/html')
        res.end(content)
      })
    }
  })
})

server.listen(3000,()=>{
  console.log('Server is Listening on port 3000')
})