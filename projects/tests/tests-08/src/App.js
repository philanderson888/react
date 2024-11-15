import logo from './logo.svg';
import './App.css';

const setSomething = (event) => {
  console.log(`checkbox event ... name/id ${event.target.name} ${event.target.id} ... ${event.target.value} ... checked ${event.target.checked}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 title="philip anderson 2">Philip Anderson 2</h1>
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
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={e => setSomething(e)} />
          <label for="vehicle1"> I have a bike</label><br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={e => setSomething(e)} />
          <label for="vehicle2"> I have a car</label><br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={e => setSomething(e)} />
          <label for="vehicle3"> I have a boat</label><br /><br />
          <input type="submit" value="Submit" />
      </form>
      </header>


    </div>
  );
}

export default App;
