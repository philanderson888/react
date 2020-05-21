import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';
console.log('in App.js')
// localStorage.removeItem('token');
// console.log(`clearing token so getting it - ${localStorage.getItem('token')}`)
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <script>console.log('in App.js');</script>
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>    
        </div>
      </Provider>
    );  
  }
}
export default App;
