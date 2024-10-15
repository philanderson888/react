import ComponentFixed from "./ComponentFixed";
import ComponentWithData from "./ComponentWithData";
import ComponentAsClass from "./components/ComponentAsClass";
import ComponentAsFunction from "./components/ComponentAsFunction";

function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <ComponentFixed />
      <ComponentWithData data={{ name: "Component with data" }} />
      <ComponentAsFunction data={{ name: "Component A As Function" }} />
      <ComponentAsClass data={{ name: "Component B As Class" }} />
    </div>
  );
}

export default App;
