const React  = require("react")

//react is super parent class and we are creating child component which gets all property from parent calss
//this is class component syntex

class New extends React.Component {
 //method 
    render () {
        return(
            <div>
                <h1>New page</h1>
                <form action ="/fruits" method ="post">
                    <label htmlFor ="name"> Name:</label>
                    <input type= "text" id ="name" name="name"></input>
                    <label htmlFor ="color">Color:</label>
                    <input type= "text" id ="color" name="color"></input>
                    <label htmlFor ="readyToEat"> Ready To Eat:</label>
                    <input type= "checkbox" id ="readyToEat" name="readyToEat"></input>
                    <input type="submit" value = "Create Fruit"></input>
                </form>
                </div>
        )
    }
}
module.exports = New
