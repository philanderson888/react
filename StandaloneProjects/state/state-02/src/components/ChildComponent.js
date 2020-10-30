import React from 'react';
class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Child component with data from parent - {this.props.text}</p>
            </div>
        );
    }
}
export default ChildComponent