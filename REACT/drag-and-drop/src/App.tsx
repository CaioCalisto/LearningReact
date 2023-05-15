import './App.css'

function App() {

  function allowDrop(ev){
    ev.preventDefault()
  }

  function drag(ev) {
    ev.dataTransfer.setData("item", ev.target.id)
  }

  function drop(ev) {
    ev.preventDefault()
    const el = ev.dataTransfer.getData("item")

    ev.target.appendChild(document.getElementById(el))
  }
  
  return (
    <>
      <div className="box" onDrop={() => drop(event)} onDragOver={() => allowDrop(event)}>
        <div id="item" draggable="true" onDragStart={() => drag(event)}>
        </div>
      </div>
      <div className="box" onDrop={() => drop(event)} onDragOver={() => allowDrop(event)}>
        <div id="item" draggable="true" onDragStart={() => drag(event)}>
        </div>
      </div>
      <div className="box" onDrop={() => drop(event)} onDragOver={() => allowDrop(event)}>
        <div id="item" draggable="true" onDragStart={() => drag(event)}>
        </div>
      </div>
    </>
  )
}

export default App
