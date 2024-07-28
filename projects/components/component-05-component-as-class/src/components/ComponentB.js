import React from 'react'
class ComponentB extends React.Component {
    render() {
        return <div>This is component B displaying props as '{this.props.name}'</div>
    }
}
export default ComponentB