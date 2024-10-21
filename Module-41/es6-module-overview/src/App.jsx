import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  const watchs = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: 399,
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 6",
      price: 349,
    },
    {
      id: 3,
      name: "Garmin Forerunner 965",
      price: 599,
    },
    {
      id: 4,
      name: "Fitbit Versa 4",
      price: 229,
    },
    {
      id: 5,
      name: "Fossil Gen 6",
      price: 299,
    }
  ];
  

  return (
    <>
     
      <h1>Vite + React</h1>
      
      {
        watchs.map(watch => <Watch key={watch.id} watch = {watch}></Watch>)
      }
      
    </>
  )
}

export default App
