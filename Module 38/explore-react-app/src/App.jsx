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
      <Device name = 'laptop' price = '50k'></Device>
      <Device name = 'Phone' price = '15k'></Device>
      <Device name = 'Watch' price = '3k'></Device>
      <Device name = 'keyboard' price = '400'></Device>
      <Device name = 'Mouse' price = '600'></Device>

    </>
  )
}


function Device(props){
  return (
    <div>
        <h2>Devices is: {props.name} price is: {props.price} </h2>
    </div>
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
    <div className='student' >
      <h3>This is student:</h3>
      <p>Name:</p>
      <p>age:</p>
    </div>
  )
}



export default App
