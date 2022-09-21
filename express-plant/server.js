//load express

const express = require("express")
const port =3000

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",]
//create app
const app = express()
//define route


app.get('/:index',(req ,res) => {   //index is just a parameter for required string so you can name anything
    if(plants[req.params.index]){
         res.send(plants[req.params.index])  ///req.params.index is the request for required object in array
    console.log(req.params)}
    else{
        res.send("Nothing found")
    }
})

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})

//example with query

app.get('/howdy/:firstname', (req,res) => {
    console.log(req.params)
    console.log(req.query)
    res.send("testing")
    
})
//listen port
app.listen(port, ()=>{
    console.log("running server on port ...",port)
})
