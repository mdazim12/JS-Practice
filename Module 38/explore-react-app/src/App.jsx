import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>

    </>
  )
}

function Person(){
  const age = 25;
  const money = 450;
  const person = {name : 'sakib khan' , age: 32, income : 20000}
  return <h3>Hello Sir my age is: {age + money} her name is{person.name} , her age is: {person.age} </h3>
}

function Student(){
  return(
    <div>
      <h3>This is student:</h3>
      <p>Name:</p>
      <p>age:</p>
    </div>
  )
}



export default App
