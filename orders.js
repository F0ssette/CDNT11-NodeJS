var express = require('express')
var router = express.Router()
const { v4: uuidv4, v4 } = require('uuid');

// Log de la date
router.use(function timeLog (req, res, next) {
    console.log('Time is : ', Date.now())
    next()
})

// log de l'url
router.use(function theWay (req, res, next) {
    console.log('Method : ' + req.method + ' on Endpoint : '+ req.baseUrl + req.url)
    next()
})

// CRUD get de la liste des orders
router.get('/', function(req, res) {
    res.status(200).send('Voici la liste des orders')
})

// CRUD get/:id pour voir un order en particulier
router.get('/:id', function(req, res) {
    let id = req.params.id
    res.status(200).send('Order id : ' + id)
})

// CRUD post avec la création de l'order
router.post('/', function(req, res) {
    const id = uuidv4()
    res.status(201).send('Order with id : ' + id + ' created')
})

// CRUD update pour mettre à jour l'order selectionné par l'id
router.put('/:id', function(req, res) {
    const id = req.params.id
    res.status(200).send('Order with id : ' + id + ' updated')
})

// CRUD delete pour supprimer l'order selectionné par l'id
router.delete('/:id', function(req, res) {
    let id = req.params.id
    res.status(204).send()
})

module.exports = router