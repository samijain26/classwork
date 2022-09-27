const React = require('react')
class Index extends React.Component{
    render(){

        console.log(this.props)
        const { banana } = this.props
        return (
            <div>
    
                <h1>Index page</h1>
                <ul>
                    {banana.map((meats,i)=>{
                        return (
                            <li key={i}>
                                {/* keys are ways of react to identify items and
                                 their changes,  each key must be unique and different than the other key.
                                  You don't have to do them, but it is a good practice */
                                  }
                                The <a href ={`/meats/${i}`}>{meats.name}</a> is {meats.type}</li>
    
                        )
                    }
                    )}
                    </ul>
                    <nav>
                        <a href = '/meats/new'>Create New item
    
                        </a>
                    </nav>
            </div> 
            )
        }
    }
    module.exports = Index