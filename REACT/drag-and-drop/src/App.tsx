import React from 'react'
import './App.css'

function App() {

  function onDragOver(ev: React.DragEvent<HTMLDivElement>){
    ev.preventDefault()
  }

  function onDragStart(ev: React.DragEvent<HTMLDivElement>) {
    ev.dataTransfer.setData("item", ev.target.id)
  }

  function onDragDrop(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault()
    const el = ev.dataTransfer.getData("item")

    ev.target.appendChild(document.getElementById(el))
  }
  
  return (
    <>
      <div className="box" onDrop={() => onDragDrop(event)} onDragOver={() => onDragOver(event)}>
        <div id="item" draggable="true" onDragStart={() => onDragStart(event)}>
        </div>
      </div>
      <div className="box" onDrop={() => onDragDrop(event)} onDragOver={() => onDragOver(event)}>
        
      </div>
      <div className="box" onDrop={() => onDragDrop(event)} onDragOver={() => onDragOver(event)}>
        
      </div>
    </>
  )
}

export default App
