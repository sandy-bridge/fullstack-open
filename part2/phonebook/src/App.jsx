import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

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
    axios.post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }

  useEffect(() => {
  axios.get('http://127.0.0.1:3001/persons')
  .then(response => setPersons(response.data))}, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} handleNewNameChange={handleNewNameChange} newName={newName} handleNewNumberChange={handleNewNumberChange} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App