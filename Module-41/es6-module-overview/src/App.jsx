import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  const watchs = [
    {id: 1, name: 'apple watch', price: 2000},
    {id: 2, name: 'Mi watch', price: 1500},
    {id: 3, name: 'Huwai watch', price: 2000},
  ]

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
