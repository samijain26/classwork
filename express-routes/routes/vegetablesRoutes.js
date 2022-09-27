// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()
const vegetables = require('../models/vegetable')

router.get('/', (req, res) => {  
    //res.send(vegetables)
    res.render("vegetables/Index",{vegetables:vegetables})
})
router.get("/new",(req,res) => {
    res.render("vegetables/New")
})
router.post("/",(req,res) =>{
    vegetables.push(req.body)
   res.redirect('/vegetables')
})



router.get('/:index', (req, res) => {
    //res.send(vegetables[req.params.index])
    res.render("vegetables/Show",{vegetable:vegetables[req.params.index]})
})

module.exports = router