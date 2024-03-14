import Person from "./Person"

const RemovePerson = (id, remove) => {
    const handler = () => remove(id)
    return handler
}

const Persons = ({ persons, remove }) => (
    persons.map(person => <Person key={person.name} person={person} remove={RemovePerson(person.id, remove)} />)
)

export default Persons
