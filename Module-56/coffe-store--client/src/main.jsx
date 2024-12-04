import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AddCofffe from './components/AddCofffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path :'/',
        element : <Home></Home>,
        loader : ()=> fetch('http://localhost:5000/coffee')
        
      },

      {
        path :'/addCoffe',
        element : <AddCofffe></AddCofffe>
      },
    
      {
        path : '/UpdateCoffe/:id',
        element : <UpdateCoffe></UpdateCoffe>,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },

  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
