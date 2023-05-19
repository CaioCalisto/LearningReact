import { useEffect, useRef, useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [renderCount, setRenderCount] = useState(0)

  const renderCountRef = useRef(0)

  useEffect(() => {
    // With this line I can see inumerous number
    // setRenderCount(prevRenderCount => prevRenderCount + 1)
    
    // with this line I can this counter being increments fews time
    renderCountRef.current = renderCountRef.current + 1
  })

  const prevName = useRef('')

  // I want to render only when name changed
  useEffect(() => {
    prevName.current = name
  }, [name])

  // run just once
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('This is my alert after 1 seconds I rendered this page')
  //   }, 1000)
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      alert('This is my alert after 1 seconds I changed name')
    }, 1000)
  }, [name])

  return (
    <>
      <input placeholder='Type your name' value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <div>I rendered {renderCount} times. renderCount</div>
      <div>I rendered {renderCountRef.current} times. renderCountRef.current</div>
      <br /><br />
      <div>Previous name: {prevName.current}</div>
    </>
  )
}

export default App
