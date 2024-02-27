import { useState } from 'react'

const Persons = ({ persons }) => (
  persons.map(person => <p key={person.name}>{person.name}: {person.number}</p>)
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123456', 
      id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => 
    setNewName(event.target.value)

  const [newNumber, setNewNumber] = useState('')

  const handleNewNumberChange = (event) => 
    setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name == newName)) {
      alert(`${newName} already exists!`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name == newName)) {
      alert(`${newName} already exists!`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App