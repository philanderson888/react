import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class DisplayThis extends React.Component {
  render() {
    return <div>
          <h1>Component ... name ...  {this.props.name}</h1>
      </div>
  }
} 

root.render(
  <React.StrictMode>
    <DisplayThis name="Component01" />
  </React.StrictMode>
);
