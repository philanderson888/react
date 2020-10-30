import React from 'react';
import ReactDOM from 'react-dom';

class DisplayThis extends React.Component {
  render() {
    return <h1>This is a component displaying here {this.props.name}</h1>
  }
} 

const element = <DisplayThis name="Component01" />;

ReactDOM.render(
  element, document.getElementById('root')
);
