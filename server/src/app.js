// console.log("Hello")
const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/register', (req, res) => {
  res.send({
    message: 'Hello ${req.body.email}! Yow were registered! Have fun'
  })
})

app.listen(process.env.PORT || 8081)
