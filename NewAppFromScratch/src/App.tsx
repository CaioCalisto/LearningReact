import React from "react"
import './styles.css'
import logo from './assets/logo-react.svg'

export const App = () => {
  return (
    <div>
      <h1>React from scratch.</h1>
      <br />
      <h1>Environment {process.env.NODE_ENV}</h1>
      <h1>Name: {process.env.name}</h1>
      <br />
      <img src={logo} alt="React Logo" width="300" height="200" />
    </div>
  )
}