import { useState } from 'react'
import Header from './components/header'
import Content from './components/Content'
import Total from './components/Total'


function App() {
 // Exercise props
 const exercises = [
  { section: 'Fundamentals of React', exercise: 10 },
  { section: 'Using props to pass data', exercise: 7 },
  { section: 'State of a component', exercise: 14 },
];

// Calculate the total number of exercises
const totalExercises = exercises.reduce((sum, { exercise }) => sum + parseInt(exercise), 0);

  return (
    <div>
      <Header course='Half Stack application development' />
      {exercises.map(({ section, exercise }, index) => (
      <Content key={index} section={section} exercise={exercise}/>
      ))}
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App
