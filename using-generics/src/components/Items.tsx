import { UL } from "./generics/UL"
import { MyItemType } from "./MyItemType"

const todos: MyItemType[] = [
  { name: 'Caio', age: 35},
  { name: 'Natalia', age: 32},
]

function ShowItem(item: MyItemType){
  return (
    <>
      {item.name}-{item.age} years
      <button>Remove</button>
    </>
  )
}

export function ShowItems() {
  return (
    <UL 
      className=""
      items={todos}
      itemClick={(item) => alert(item.name + ', ' + item.age + ' years old')}
      render={(todo) => ShowItem(todo)}
    />
  )
}