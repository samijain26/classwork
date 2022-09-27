const React = require("react")

class Show extends React.Component{
    render(){
        const vegetable = this.props.vegetable
        return(
                <div>
                <h1>show page</h1>
                 <p> The {vegetable.name} is {vegetable.color}</p>
                 <nav>
                <a href='/vegetables'>back</a>
            </nav>
                </div>
            )
    }
}
module.exports = Show
