const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))


app.get("/create", (req,res)=>{
  console.log("Create Page")
  res.render("form",{})
})

app.post("/user",(req,res)=>{
  let data = req.body
  let username = data.username
  let email = data.email
  console.log("Data: ", data)
  res.render('user',
    {
     data1 : username,
     data2: email
    })
})


app.get('/users',(req,res)=>{
  console.log("Users Page")
  const users = [
    {
      "username": "markos",
      "email" : "marka@aueb.gr"
    },
    {
      "username": "thanassis",
      "email" : "thanassisa@aueb.gr"
    }
  ]

  res.render('users',{users})
})

app.listen(port,(req,res)=>{
  console.log('server is running on port 3000')
})