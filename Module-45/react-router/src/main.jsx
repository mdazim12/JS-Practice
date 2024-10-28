import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element: <div>Hello i am form react router </div>
  },
  {
    path: '/about',
    element: <div> I am from the about page </div>
  },
  {
    path: '/contact',
    element: <div> I am fom the contaacty page</div>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
