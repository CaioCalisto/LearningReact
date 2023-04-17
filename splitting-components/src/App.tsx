import { useState } from 'react'

function App() {
  
  return (
    <>
      <button onClick={() => {
        // Here I only download this component when user click on the button
        import('./components/Something').then(module => {
          alert(module.DoSomeAction('Hello', 'World'))
        })
      }}>
        Click here
      </button>
    </>
  )
}

export default App
