// Correction du TP 
const express = require('express')
const app = express()
const port = 3000
const orders =require('./orders')

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use('/orders', orders)

app.use('*', (req, res) => {
    res.status(404).send('Error 404, page not found.')
  })