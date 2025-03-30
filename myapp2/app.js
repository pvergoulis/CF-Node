const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) // Κανει να διαβαζει json
app.use(express.urlencoded({extended:true})) // Για φορμες forms



app.use('/',express.static('files')) // θα ερθεις να τρεξεις στατικες σελιδες που ειναι μεσα στον φακελο Files

const logger = (req,res,next) =>{
  let url = req.url
  console.log("Logger ", req.body)
  let time = new Date()
  console.log("Received requests for  " + url + " at "+ time)

  next()
}


app.get('/',(req,res)=>{
  console.log('home')
  res.send('Home Page')
})


app.post('/user',logger,(req,res)=>{
  let data = req.body
  let username = req.body.username
  let email = req.body.email

  console.log(data)
  res.send(`Name: ${username} & Email: ${email}`)
})



app.post('/userForm',(req,res)=>{
  let data = req.body
  console.log("Data", data)
  res.send("User form page")
})

app.use('/user1',(req, res)=>{
  console.log("User 1")
  res.send("User 1 PAGE")
})

app.use('/user2',(req, res)=>{
  console.log("User 2")
  res.send("User 2 PAGE")
})

app.use('/user2/hello',(req, res)=>{
  console.log("User 2 hello")
  res.send("User 2 PAGE hello")
})

app.listen(port,()=>{
  console.log('Port 3000 is running')
})