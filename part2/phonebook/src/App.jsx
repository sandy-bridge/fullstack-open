import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => 
    setNewName(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name == newName)) {
      alert(`${newName} already exists!`)
      return
    }
    const personObject = {
      name: newName
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App