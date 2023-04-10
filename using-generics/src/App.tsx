import { UL } from "./components/UL";

const todos = [] = [ "A", "B"]

function App() {
  return (
    <UL 
      className=""
      items={todos}
      itemClick={(item) => alert(item)}
      render={(todo) => (
        <>
          {todo}
          <button>Remove</button>
        </>
      )}
    />
  )
}

export default App;
