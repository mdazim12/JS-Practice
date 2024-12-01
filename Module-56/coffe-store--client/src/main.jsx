import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AddCofffe from './components/AddCofffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path :'/addCoffe',
    element : <AddCofffe></AddCofffe>
  },

  {
    path : '/UpdateCoffe',
    element : <UpdateCoffe></UpdateCoffe>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
