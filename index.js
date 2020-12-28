const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
let orders =require('./orders')

app.get('/', (req, res) => {
  res.send('I am Batman.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/orders', orders)

app.use('', (req, res) => {
  res.send('Error 404, page not found')
})