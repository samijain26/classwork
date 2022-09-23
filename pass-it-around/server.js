const express = require("express")
const port = 3000
const app = express()

const random = Math.floor(Math.random(100-1))

app.get('/',(req,res) =>{
    res.send("<h1>99 Bottles of Soda on the wall</h1><h2><a href='/98'</a>take one out pass it around</h2>")
})


app.get('/:number_of_bottles',(req,res) =>{
    for(i= req.params.number_of_bottles; i >=0 ; i--){ 
   if (i ==0){
    
        res.send("<h1>99 Bottles of Soda on the wall</h1><h2><a href='/98'</a>take one out pass it around</h2")
      return
   
   }else if(Math.random() > .85){
  
    res.send(`<h1>${req.params.number_of_bottles} Bottles of 
    Soda on the wall</h1><h2><a href='/${parseInt(req.params.number_of_bottles) + 1}'
    </a> Add one more</h2>`)}
    else{
        res.send(`<h1>${req.params.number_of_bottles} Bottles of 
        Soda on the wall</h1><h2><a href='/${parseInt(req.params.number_of_bottles)-1}'
        </a>take one out pass it around</h2>`)}
    }
  

})

app.listen(port, ()=>{
    console.log("running server on port ...",port)
})
