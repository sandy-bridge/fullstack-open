import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
    personService.create(personObject)
      .then(data => setPersons(persons.concat(data)))
      setErrorMessage(
        `Added ${newName}`
      )
      setNewName('')
      setNewNumber('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
  }
  const removePerson = (id) => {
    setPersons(persons.filter(person => person.id != id))
    personService.remove(id)
  }

  useEffect(() => {
  personService.getAll()
    .then(data => setPersons(data))}, [])

  return (
    <div>
      <Notification message={errorMessage}/>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} handleNewNameChange={handleNewNameChange} newName={newName} handleNewNumberChange={handleNewNumberChange} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} remove={removePerson}/>
    </div>
  )
}

export default App