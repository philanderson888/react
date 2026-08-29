import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import CheckboxComponent from './components/Checkbox';
import CheckboxFunctionalComponent from './components/CheckboxFunctionalComponent';
import CheckboxFunctionalComponentWithProps from './components/CheckboxFunctionalComponentWithProps';

function App() {

  const [itemsLiked, setItemsLiked] = useState("");
  const [preferences] = useState({'cat': false, 'dog': false, 'fish': false});

  const printTargetData = (event) => {
    console.log(`checkbox event ... name/id ${event.target.name} ${event.target.id} ... ${event.target.value} ... checked ${event.target.checked}`);
  }
  
  const togglePreference = (animal, checked) => {
    preferences[animal] = !preferences[animal];
    console.log(`toggle ... ${animal} ... is now ${checked}`);
    console.log(`saved preferences ... ${JSON.stringify(preferences)}`);

    let animalsLiked = '';
    for (const animal in preferences) {
      if (preferences[animal]) {
        animalsLiked += animal + ' ';
      }
    }
    setItemsLiked(animalsLiked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 title="philip anderson title">Philip Anderson</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload ... phil anderson
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="/action_page.php">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={e => printTargetData(e)} />
          <label htmlFor="vehicle1"> I have a bike</label><br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={e => printTargetData(e)} />
          <label htmlFor="vehicle2"> I have a car</label><br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={e => printTargetData(e)} />
          <label htmlFor="vehicle3"> I have a boat</label><br /><br />
          <CheckboxComponent />
          <CheckboxFunctionalComponent />
          <br />
          <br />
          <br />
          <CheckboxFunctionalComponentWithProps onText="checked" offText="not checked" animal="cat" togglePreference={togglePreference} />
          <CheckboxFunctionalComponentWithProps onText="checked" offText="not checked" animal="dog" togglePreference={togglePreference} />
          <CheckboxFunctionalComponentWithProps onText="checked" offText="not checked" animal="fish" togglePreference={togglePreference} />
          <p>{preferences['cat'] ? 'cat is checked' : 'cat is not checked'}</p>
          <p>{preferences['dog'] ? 'dog is checked' : 'dog is not checked'}</p>
          <p>{preferences['fish'] ? 'fish is checked' : 'fish is not checked'}</p>
          <p>These are the items selected ... {itemsLiked}</p>

          <input type="submit" value="Submit" />
      </form>

      </header>
    </div>
  );
}

export default App;
