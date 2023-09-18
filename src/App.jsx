import { StrictMode } from 'react'
import {
  RouterProvider,
} from "react-router-dom";

import './App.css'
import router from './router.jsx'

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
