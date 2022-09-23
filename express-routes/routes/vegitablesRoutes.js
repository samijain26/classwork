// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()
const vegitables = require('../models/vegitable')

router.get('/', (req, res) => {  
    res.send(vegitables)
})

router.get('/:index', (req, res) => {
    res.send(vegitables[req.params.index])
})

module.exports = router