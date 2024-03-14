const Person = ({ person, remove }) => {
    console.log(remove)
    return (
    <p>{person.name}: {person.number} <button id={person.id} onClick={remove}>delete</button></p>
)}

export default Person
