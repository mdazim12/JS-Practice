import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib Khan' , 'Salman Khan' , 'Josim', 'Jahed Khan' , 'Bappa Raj'];

  const singers = [
    {name : 'Mhafur Rahama', age : 68},
    {name : 'Eva Rahama', age : 38},
    {name : 'Pritom vai', age : 28},
  ]
  return (
    <>
      
      <h1>Vite + React</h1>

     {
      singers.map(singer => <Singer name = {singer}></Singer>)
     }

      {/* <Actor name ="Kala "></Actor>  */}


    {/* {
      actors.map(actor => <Actor name = {actor}></Actor>)
    } */}


      {/* <Todo task ="ami gumabo" isDone ={true}></Todo>
      <Todo task ="core concpets" isDone = {false}></Todo>
      <Todo task ="ami gumabo" isDone = {true}></Todo>
      <Actor name ="Kala "></Actor> */}
    
      {/* <Person></Person>
      <Student grade = '7' score = '90'></Student>
      <Student grade = '11' score = '87'></Student>
      <Student></Student>
      <Device name = 'laptop' price = '50k'></Device>
      <Device name = 'Phone' price = '15k'></Device>
      <Device name = 'Watch' price = '3k'></Device>
      <Device name = 'keyboard' price = '400'></Device>
      <Device name = 'Mouse' price = '600'></Device> */}

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

  //const {grade , score} ={grade :'7', score : '90'}

function Student({grade = 'N/A', score = 'N/A'}){
  
  return(
    <div className='' >
      <p>Name: {grade}</p>
      <p>age: {score} </p>
    </div>
  )
}



export default App
