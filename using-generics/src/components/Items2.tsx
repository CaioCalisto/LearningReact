import { UL } from "./generics/UL"
import { MyItemType2 } from "./MyItemType2"

const todos: MyItemType2[] = [
  { language: "C#", important: true},
  { language: "Golang", important: false}
]

function ShowItem(item: MyItemType2){
  return (
    <>
      {item.language} is importante: {item.important}
      <button onClick={() => alert('Remove item')}>Remove</button>
    </>
  )
}

export function ShowItems2() {
  return (
    <UL 
      className=""
      items={todos}
      itemClick={(item) => alert(item.language + ', important: ' + item.important)}
      render={(todo) => ShowItem(todo)}
    />
  )
}