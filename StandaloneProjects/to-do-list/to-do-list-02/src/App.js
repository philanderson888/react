import './App.css';
function App() {
  console.clear();
  const title = "This is a title";
  const todos = ['This is a task','and this is another task'];
  function displayToDos(){
      return(
        <ul>
          {todos.map(todo=>(
            <li>{todo}</li>
          ))}
        </ul>
      );
  }
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>To Do List</h1>
        <strong>{title}</strong>
        <br />
        {displayToDos()}
        <ToDos props={title} />
      </header>
    </div>
  );
}
const ToDos = (todos) => {
  return(
    <h2>{todos} items in array</h2>
  );
}
export default App;