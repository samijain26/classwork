//get the package
//const fruits = require("./models/fruits") ///our model we need to define path with ./
const express = require("express")

//bring in packaged route

const fruitRoutes = require('./routes/fruitsRoutes')

const vegitablesRoutes = require('./routes/vegitablesRoutes')

const meatRoutes = require('./routes/meatRoutes')

const app = express()

const port = 5000

//set up array

//middleware
app.use('/api/fruits',fruitRoutes)

app.use('/api/vegitables',vegitablesRoutes)

app.use('/api/meat',meatRoutes)
// app.get('/' , (req,res) => {
//  res.send("<h1>Hello world!</h1>")
// })


// //send index route
// app.get('/fruits' , (req,res) => {

//     res.send(fruits)

//     fruits.filter(checkColor)
//     function checkColor(color){
//         for (let i = 0; i <fruits.length; i ++){
//             if ( req.query.color == fruits[i].color ){
               
//                 console.log(req.query.name)
//             }
//             return( res.send(fruits[i]))
//          }
// }
//})

//set up show route


// app.get('/fruits/:index' , (req,res) => {
//    // console.log(req.params, ':parameters')
//    // console.log(req.query, ':query')

//     res.send(fruits[req.params.index])
// })

// //setting new route
// app.get("/fruits/new" ,(req,res) => {
//     res.send("<form>create photo</form>")

// })

// //setiing post route

// app.post("/fruits",(req,res) =>{
//     res.post("creating a new fruit")
// })

// //setting edit route

// app.get("/fruits/:index/edit", (req,res)=>{
// res.send("<form>Edit</form>")
// })

// //setting update route

// app.put("/fruits/:index", (req,res) => {
//     res.send("update a new fruit")
// })

// //put create a new entry
// //patch request just update one fi
// // setup destroy route

// app.delete("/fruits/:index", (req,res) => {
//     res.send("deleting a fruit")
// })






//listen to port 

app.listen(port , () => {
    console.log("listening on port: " ,port)
})

