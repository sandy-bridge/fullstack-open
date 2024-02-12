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
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [total, setTotal] = useState(0)

  const AddGood = () => {
    let newGood=good+1
    let newTotal=total+1
    setGood(newGood)
    setTotal(newTotal)
    setAverage((newGood-bad)/newTotal)
    setPercentage((newGood/newTotal)*100)
  }

  return (
    <div>
      <Button handleClick={AddGood} text="good"/>
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
      <p>
        Total: {total}
      </p>
      <p>
        Average: {average}
      </p>
      <p>
        Percentage: {percentage}%
      </p>
    </div>
  )
}

export default App