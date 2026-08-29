import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



class Component01 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
} 

class Component02 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
}

class Component03 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
}

class DisplayThis extends React.Component {
  render() {
    return <div>
          <h3>Component ... name ...  {this.props.name}</h3>
      </div>
  }
} 

const element = 
  <>
    <Component01 name="Component01" />
    <Component02 name="Component02" />
    <Component03 name="Component03" />
    <DisplayThis name="DisplayThis" />
  </>;


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);
