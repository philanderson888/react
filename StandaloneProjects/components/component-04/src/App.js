import Component01 from './Component01'
function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <Component01 name='Component 01 displaying data' />
    </div>
  );
}
export default App;