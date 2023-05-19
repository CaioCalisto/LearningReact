import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setRenderCount(prevRenderCount => prevRenderCount + 1)
  })

  return (
    <>
      <input placeholder='Type your name' value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <div>I rendered {renderCount} times</div>
    </>
  )
}

export default App
