import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState<number[]>([1, 2, 3])
  
  function incrementValueInThisCell(index: number){
    
    setCells(prevCells => {
      let lastNumber = 0
      cells.map(cell => {
        if (lastNumber <= cell){
          lastNumber = cell + 1
        }
      })
      
      const newCells = [...prevCells]
      newCells[index] = lastNumber
      return newCells
    })    
  }

  return (
    <>
      <h1>Increment number</h1>
      {cells.map((cell, index) => (
        <button key={index} className='cell' onClick={() => incrementValueInThisCell(index)}>{cell}</button>
      ))}
    </>
  )
}

export default App
