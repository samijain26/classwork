const React = require('react')
class Index extends React.Component{
    render(){

        console.log(this.props)

        //object destructuring taking value from  fruit property
       
        //same as const fruits = this.props.fruits

        // Object Destructuring
        const { fruits } = this.props

        // const fruits = this.props.fruits

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */

        /*
            [
                { name: 'Pear' ... },
                { name: 'Banana' ... },
                { name: 'Apple' ...}
            ]
        */ 
            // After we map over it

        /*
            [element, element, element]
        */

        return (
        <div>

            <h1>Index page</h1>
            <ul>
                {fruits.map((fruit,i)=>{
                    return (
                        <li key={i}>
                            {/* keys are ways of react to identify items and
                             their changes,  each key must be unique and different than the other key.
                              You don't have to do them, but it is a good practice */
                              }
                            The <a href ={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}</li>

                    )
                }
                )}
                </ul>
                <nav>
                    <a href = '/fruits/new'>Create New Fruit

                    </a>
                </nav>
        </div> 
        )
    }
}
module.exports = Index
//map takes each data in fruit array and maps it with jsx