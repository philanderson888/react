# State

## State01

Adding a basic component to track state

```jsx
import React from 'react'
class State01 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "State Data"
        }
    }
    render(){
        return <div>Component To Track State showing data '{this.state.data}'</div>;
    }
}
export default State01
```