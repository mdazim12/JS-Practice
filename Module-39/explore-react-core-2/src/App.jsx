import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {

 function handelClick(){
  alert('Button Clicked')
 }

 const handelClick2 = () =>{
  alert('Secound Button cliked');
 }

 const handaleFive = (num) =>{
  alert(num + 5)
 }


  return (
    <>
      
      <h2>React Core Concepets Two </h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handelClick}>Click Me</button>

      <button onClick={handelClick2} >Button Two</button>

      <button onClick={() => {alert('hello')}} >Button Three</button>

      <button onClick={() => handaleFive(3)} >Button Three</button>
      
    </>
  )
}

export default App
