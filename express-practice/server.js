const express = require("express")

//this is a function to create expree app

const app = express()
//use method to get request http
//'/' for root path route, calls callback function as second argument
//configure app
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello Express!</h1>")
// //if we changed something here it does not reflect immdiatley so we use

// })
// app.get('/home',(req,res) =>{
//     res.send("<h1>Home Page</h1>")
// })
//app.put
//app.delete
//app.post
app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

//listen to the port and call back function
app.listen(3000 , () =>{
    console.log("listening on port 3000")
})
// rs for restart the server
//to install nodemon use sudo npm i -g nodemon
//nodemon is used to refresh the express app each time you make change