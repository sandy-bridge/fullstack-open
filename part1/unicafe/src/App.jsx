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

  const AddNeutral = () => {
    let newNeutral=neutral+1
    let newTotal=total+1
    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage((good-bad)/newTotal)
    setPercentage((good/newTotal)*100)
  }

  const AddBad = () => {
    let newBad=bad+1
    let newTotal=total+1
    setBad(newBad)
    setTotal(newTotal)
    setAverage((good-newBad)/newTotal)
    setPercentage((good/newTotal)*100)
  }

  return (
    <div>
      <Button handleClick={AddGood} text="good"/>
      <Button handleClick={AddNeutral}text="neutral"/>
      <Button handleClick={AddBad}text="bad"/>
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