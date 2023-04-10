import { UL } from "./generics/UL"

function ShowItem(todo: string){
  return (
    <>
      {todo}
      <button>Remove</button>
    </>
  )
}

export function ShowItems() {
  const todos = [] = [ "A", "B"]
  
  return (
    <UL 
      className=""
      items={todos}
      itemClick={(item) => alert(item)}
      render={(todo) => ShowItem(todo)}
    />
  )
}