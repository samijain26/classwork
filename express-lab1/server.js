const express = require("express")
const port =3000


//create app
const app = express()

app.get("/greeting",(req,res) =>{
    res.send("hello stranger")
})

 app.get('/greeting/:name',(req ,res) => {   //index is just a parameter for required string so you can name anything
    
  res.send("Hello" + req.params.name + " What's up")  ///req.params.index is the request for required object in array
   
 })

// ************************************************
//calculator tip
app.get('/tip/:total/:tipPercentage',(req,res) =>{
     tip = req.params.total * (req.params.tipPercentage/100)
res.send("Total tip:" + tip)
console.log(tip)

})
 
app.get('/magic/:myquestion',(req,res)=>{

    const quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it",
     "As I see it yes", "Most likely", "Outlogitok good","Yes", "Signs point to yes", 
     "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", 
     "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no",
     "Outlook not so good", "Very doubtful"]

    randomQ = quotes[Math.floor(Math.random()*quotes.length-1)]
     
    res.send(`Here is your question: ${req.params.myquestion}<h1> ${randomQ}</h1>`  )
   // res.send()
    console.log(randomQ)
    
 
})


         app.listen(port, ()=>{
            console.log("running server on port ...",port)
})

