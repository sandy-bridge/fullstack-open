import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <span>
    <button onClick={handleClick}>{text}</button>
  </span>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={() => setGood(good+1) }text="good"/>
      <Button handleClick={() => setNeutral(neutral+1) }text="neutral"/>
      <Button handleClick={() => setBad(bad+1) }text="bad"/>
      <h1>Statistics</h1>
      <p>
        Good: {good}
      </p>
      <p>
        Neutral: {neutral}
      </p>
      <p>
        Bad: {bad}
      </p>
    </div>
  )
}

export default App