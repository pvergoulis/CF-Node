const express = require('express')
const app = express()

app.use(express.json())

const user = require('./routes/user.routes')
const userProduct = require('./routes/user.product.route')

app.use('/api/users', user)
app.use('/api/user-product', userProduct)

module.exports = app