var express = require('express')
var router = express.Router()
const app = express()
const { v4: uuidv4, v4 } = require('uuid');

router.use(function timeLog (req, res, next) {
    console.log('Time is : ', Date.now())
    next()
})

router.use(function theWay (req, res, next) {
    console.log(req.path)
    next()
})

router.get('/', function(req, res) {
    res.send('Voici la liste des orders')
})

router.get('/:id', function(req, res) {
    let id = req.params.id
    console.log('Voici l order d ID : ', id)
    res.send(id)
})

router.post('/new', function(req, res) {
    res.send(uuidv4())
})

router.put('/edit/:id', function(req, res) {
    res.send(req.params.id)
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id
    console.log(id)
    res.send('L order a bien été supprimé')
})

module.exports = router