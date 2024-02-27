import { useState } from 'react'
import Person from './components/Person'

const Persons = ({ persons }) => (
  persons.map(person => <Person key={person.name} person={person} />)
)

const PersonForm = (props) => {
  return (
  <form onSubmit={props.addPerson}>
    <div>
      name: <input value={props.newName} onChange={props.handleNewNameChange}/>
    </div>
    <div>
      number: <input value={props.newNumber} onChange={props.handleNewNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

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
      <PersonForm addPerson={addPerson} handleNewNameChange={handleNewNameChange} newName={newName} handleNewNumberChange={handleNewNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App