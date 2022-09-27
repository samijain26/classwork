const React  = require("react")

//react is super parent class and we are creating child component which gets all property from parent calss
//this is class component syntex

class Show extends React.Component {
 //method 
    render () {
        //const fruit = this.props.fruit //this.object {name :'apple"}

        const {name,color,readyToEat} = this.props.fruit
 return (     //using parenthesis in return
            <div>
            <h1>show page</h1>
            <p> The {name} is {color}</p>
            {/* //ternary oprator is popular in rwact */}
            <p>  
                {readyToEat ? "it is ready to eat" : "Not ready to eat"}
            </p>
            <nav>
                <a href='/fruits'>back</a>
            </nav>
            </div>
        )
    }
       
}
module.exports = Show;