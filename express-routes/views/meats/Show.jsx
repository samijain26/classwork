const React = require("react")
class Show extends React.Component{
    render(){
        const meat = this.props.meat
        return(
            <div>
              <h1>Show page</h1>
              <p>This {meat.name} is {meat.type}</p>
              <nav><a href="/meats">Go back to index</a></nav>  </div>

        )
    }

}
module.exports = Show