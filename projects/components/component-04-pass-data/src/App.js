import ComponentFixed from "./ComponentFixed";
import ComponentWithData from "./ComponentWithData";

function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <ComponentFixed />
      <ComponentWithData data={{ name: "Component with data" }} />
    </div>
  );
}
export default App;
