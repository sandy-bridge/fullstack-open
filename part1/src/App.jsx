import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}</p>
    </>
  )
}

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Hello name="Daisy"/>
    </>
  )
}

export default App
