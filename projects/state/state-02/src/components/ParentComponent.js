import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "This is some data"
        }
    }
    render() {
        return (
            <div>
                This is the parent component
                <ChildComponent text='This is some text' />
                <ChildComponent text={this.state.data} />
            </div>
        );
    }
}
export default ParentComponent