
import './App.css'
import LimeChart from './components/LimeChart/LimeChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
      
     {/* <DaisyNav></DaisyNav> */}
     <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LimeChart></LimeChart>
     
    

    </>
  )
}

export default App
