const React  = require("react")

//react is super parent class and we are creating child component which gets all property from parent calss
//this is class component syntex

class New extends React.Component {
 //method 
    render () {
        return(
            <div>
                <h1>New page</h1>
                <form action ="/meats" method ="post">
                    <label htmlFor ="name"> Name:</label>
                    <input type= "text" id ="name" name="name"></input>
                    <label htmlFor ="type">Type:</label>
                    <input type= "text" id ="type" name="type"></input>
                     <input type="submit" value = "Create meat"></input>
                </form>
                </div>
        )
    }
}
module.exports = New
