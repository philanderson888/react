import React from 'react'
class ComponentAsClass extends React.Component {
    render() {
        return <div>
            <p>This is component as a class<br />props are '{this.props.data.name}'</p>
        </div>
    }
}
export default ComponentAsClass