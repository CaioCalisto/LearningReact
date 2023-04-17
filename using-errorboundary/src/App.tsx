import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { Grid } from './components/Grid'
import { MyCustomError } from './components/MyCustomError'

function App() {
 
  return (
    <ErrorBoundary fallback={<MyCustomError />}>
      <Grid />  
    </ErrorBoundary>
  )
}

export default App
