var express = require('express')
var router = express.Router()
const app = express()
const { v4: uuidv4, v4 } = require('uuid');

// Log de la date
router.use(function timeLog (req, res, next) {
    console.log('Time is : ', Date.now())
    next()
})

// log du chemin
router.use(function theWay (req, res, next) {
    console.log(req.path)
    next()
})

// CRUD get de la liste des orders
router.get('/', function(req, res) {
    res.send('Voici la liste des orders')
})

// CRUD get/:id pour voir un order en particulier
router.get('/:id', function(req, res) {
    let id = req.params.id
    console.log('Voici l order d ID : ', id)
    res.send(id)
})

// CRUD post avec la création de l'order
router.post('/new', function(req, res) {
    res.send(uuidv4())
})

// CRUD update pour mettre à jour l'order selectionné par l'id
router.put('/edit/:id', function(req, res) {
    res.send(req.params.id)
})

// CRUD delete pour supprimer l'order selectionné par l'id
router.delete('/delete/:id', function(req, res) {
    let id = req.params.id
    console.log(id)
    res.send('L order a bien été supprimé')
})

module.exports = router