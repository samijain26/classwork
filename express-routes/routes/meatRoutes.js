// Load express
const express = require('express')
const meats = require('../models/meats')

// Create a special router object for our routes
const router = express.Router()
const meat = require('../models/meats')

router.get('/', (req, res) => {  
   // res.send(meat)  //meats/Index is just redering JSX file
   res.render('meats/Index', {banana:meat})//banana represent meats array
})
router.get('/new',(req,res) =>{
   res.render("meats/New")
})
router.post('/',(req,res)=>{
   meats.push(req.body)
   res.redirect('/meats')
})
router.get('/:index', (req, res) => {
   // res.send(meat[req.params.index])
   res.render("meats/Show",{meat:meats[req.params.index]}) //showing only particular index value
})

module.exports = router
