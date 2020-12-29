const express = require('express')
const orders = require('./orders')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Pour lutter contre les CORS
app.use(bodyParser.urlencoded({ encoded: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

// Connection à MongoDB
mongoose.connect('mongodb+srv://BruceWayne:iambatman@cluster0.xebr2.mongodb.net/orders?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

// Affichage de la page d'accueil 
app.get('/', (req, res) => {
  res.send('I am Batman.')
})

app.use('/orders', orders)

// Affichage du message d'erreur pour toutes les autres routes
app.use('*', (req, res) => {
  res.status(404).send('Error 404, page not found.')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})