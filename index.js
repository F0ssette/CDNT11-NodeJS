const express = require('express')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');
let orders =require('./orders')

app.get('/', (req, res) => {
  res.send('I am Batman.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/orders', orders)