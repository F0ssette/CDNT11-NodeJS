const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
let orders =require('./orders')

// Affichage de la page d'accueil 
app.get('/', (req, res) => {
  res.send('I am Batman.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/orders', orders)

// Affichage du message d'erreur pour toutes les autres routes
app.use('', (req, res) => {
  res.send('Error 404, page not found')
})