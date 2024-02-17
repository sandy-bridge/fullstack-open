const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumulator, current) => accumulator + current.exercises,
    0);
  return (
    <div>
      <strong>The sum of exercises is {sum}</strong>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Course = ({ course }) => (
  <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App
