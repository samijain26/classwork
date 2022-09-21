const express = require("express")
const port = 3000
const app = express()

app.get('/',(req,res) =>{
    res.send("<h1>99 Bottles of Soda on the wall</h1>")
})

app.listen(port, ()=>{
    console.log("running server on port ...",port)
})
