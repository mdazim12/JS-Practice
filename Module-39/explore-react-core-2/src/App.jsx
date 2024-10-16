import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 function handelClick(){
  alert('Button Clicked')
 }

 const handelClick2 = () =>{
  alert('Secound Button cliked');
 }


  return (
    <>
      
      <h2>React Core Concepets Two </h2>
      <button onClick={handelClick}>Click Me</button>

      <button onClick={handelClick2} >Button Two</button>
      
    </>
  )
}

export default App
