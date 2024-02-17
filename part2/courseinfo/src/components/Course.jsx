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

export default Course