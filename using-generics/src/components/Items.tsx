import { UL } from "./generics/UL"

export function ShowItems() {
  const todos = [] = [ "A", "B"]
  
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