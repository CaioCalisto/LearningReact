import { ShowItems } from "./components/Items";
import { ShowItems2 } from "./components/Items2";
import Panel, { ActivePanel, PanelResult } from "./hooks/Panel";

const todos = [] = [ "A", "B"]

function App() {
  const data: PanelResult<ActivePanel> = Panel('dev')

  return (
    <>
      <ShowItems />
      <br />
      <ShowItems2 />
      <br />
      <br />
      {data.success && (
        <h3>SUCCESS: {data.value.someValue}</h3>
      )}
      <br /><br />
      {data.success == false && (
        <h3>Not allowed</h3>
      )}
    </>
  )
}

export default App;
