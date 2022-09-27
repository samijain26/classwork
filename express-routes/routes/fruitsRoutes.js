// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const fruits = require('../models/fruits')



// Setup "index" route shows everything in fruits array
router.get('/', (req, res) => {  

    res.render('fruits/Index' , {fruits:fruits})

//     if(req.query.color){
//    const color = fruits.filter(fruit => fruit.color ==req.query.color)
//     res.send(color)
//     }else if(req.query.readyToEat){//in querystring  enter 0 for false and 1 for true
//         const color = fruits.filter(fruit => fruit.readyToEat ==req.query.readyToEat) 
//         res.send(color) 
//     }else{
//         res.send(fruits) 
//     }

})

// Setup "new" route
router.get('/new', (req, res) => {     
    //res.send('<form>Create fruit</form>')
    res.render('fruits/New')
})

// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.readyToEat ==="on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat =false
    }
    fruits.push(req.body)
    //req.send('Creating new fruit)')

    //res.send('Creating a new fruit! (in DB)')
    res.redirect("/fruits")
})

// Setup "show" route  
router.get('/:index', (req, res) => {
   // res.send(fruits[req.params.index])
   res.render("fruits/show",{fruit:fruits[req.params.index]}) //second parameter is an object in res.randor
   //this object defined in this route becomes this.props in show component

})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    //res.send('<form>Edit fruit</form>')
   res.render("fruits/Edit",{fruit:fruits[req.params.index]})
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

module.exports = router