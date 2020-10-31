import React from 'react'
class Parent extends React.Component {
    constructor(){
        super()
        this.state={
            error:null,
            isLoaded:false,
            todos:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoaded:true,
                todos:data
            })
            console.log(this.state)
        },
        error => {
            this.setState({
                isLoaded:true,
                error
            });
        });
    }
    render(){
        const { error, isLoaded, todos } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading . . . </div>
        } else {
            return(
                <ul>
                    {todos.slice(0,5).map(todo=>(
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )    
        }
    }
}
export default Parent