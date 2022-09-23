// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()
const meat = require('../models/meat')

router.get('/', (req, res) => {  
    res.send(meat)
})

router.get('/:index', (req, res) => {
    res.send(meat[req.params.index])
})
module.exports = router
