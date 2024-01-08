import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Statistics from './Statistics'


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  console.log(good, neutral, bad)

  return (
    <>
      <Header text='Give Us Feedback' />
      <Button feedback='Good' onClick={() => { setGood(good + 1) }} />
      <Button feedback='Neutral' onClick={() => { setNeutral(neutral + 1) }} />
      <Button feedback='Bad' onClick={() => { setBad(bad + 1) }} />
      <Header text='Stats' />
      {total == 0 ? (<h3> No Feedback Given </h3>) : (
        <div>
          <Statistics text='Good:' value={good} />
          <Statistics text='Neutral:' value={neutral} />
          <Statistics text='Bad:' value={bad} />
          <Statistics text='Total:' value={total} />
          <Statistics text='Percent of Positive Feedback:' value={total == 0 ? '0' : (100 * good) / (total) + '%'} />
        </div>
      )}
    </>
  )
}

export default App
