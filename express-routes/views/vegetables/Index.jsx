const React = require("react")
class Index extends React.Component{
    render(){
        const vegetables = this.props.vegetables
        return (
        <div>

            <h1>Index page</h1>
            <ul>
                {vegetables.map((vegetable,i)=>{
                    return (
                        <li key={i}>
                            {/* keys are ways of react to identify items and
                             their changes,  each key must be unique and different than the other key.
                              You don't have to do them, but it is a good practice */
                              }
                            The <a href ={`/vegetables/${i}`}>{vegetable.name}</a> is {vegetable.color}</li>

                    )
                }
                )}
                </ul>
                <nav>
                    <a href = '/vegetables/new'>Create New Vegetable

                    </a>
                </nav>
        </div> 
        )
    }
}
module.exports = Index
//map takes each data in fruit array and maps it with jsx