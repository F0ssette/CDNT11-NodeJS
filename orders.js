const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const Order = require('./models/order')

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
    // res.status(200).send('Voici la liste des orders :')
    Order.find()
    .then(orders => res.status(200).json(orders))
    .catch(error => res.status(400).json(error))
})

// CRUD get/:id pour voir un order en particulier
router.get('/:id', function(req, res) {
    let id = req.params.id
    // res.status(200).send('Order id : ' + id)
    Order.findById(id)
    .then(orders => res.status(200).json(orders))
    .catch(error => res.status(400).json(error))
})

// CRUD post avec la création de l'order
router.post('/', function(req, res) {
    // const id = uuidv4()
    // res.status(201).send('Order with id : ' + id + ' created')
    Order.create({
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    })
    .then(orders => res.status(201).json(orders))
    .catch(error => res.status(400).json(error))
})

// CRUD update pour mettre à jour l'order selectionné par l'id
//orders => res.status(201).json(orders)
router.put('/:id', function(req, res) {
    const id = req.params.id
    // res.status(200).send('Order with id : ' + id + ' updated')
    Order.updateOne({_id : id}, {
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    })
    .then(orders => res.status(201).json(id + ' updated'))
    .catch(error => res.status(400).json(error))
})

// CRUD delete pour supprimer l'order selectionné par l'id
router.delete('/:id', function(req, res) {
    let id = req.params.id
    // res.status(204).send()
    Order.deleteOne({_id : id})
    .then(orders => res.status(204))
    .catch(error => res.status(400).json(error))
})

module.exports = router