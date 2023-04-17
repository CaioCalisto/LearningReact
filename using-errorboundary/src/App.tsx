import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { Grid } from './components/Grid'

function App() {
 
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Grid />  
    </ErrorBoundary>
  )
}

export default App
