import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={() => setGood(good+1) }text="good"/>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
    </div>
  )
}

export default App