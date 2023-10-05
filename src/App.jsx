import { StrictMode, useState } from 'react'
import {
  RouterProvider,
} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import router from './router.jsx'
import { Modal } from './components/Modal'
import { ToastContainer, toast } from 'react-toastify'


function App() {
  const notify = () => toast("Vous avez accepté les cookies, vous pouvez continuer !");
  const [isOk, setOk] = useState(localStorage.getItem('isOk') === 'true')
  return (
    <StrictMode>
      <RouterProvider router={router} />
      {
        !isOk && (
          <>
            <Modal title="Cookies">
              <span className="mx-2">
                Notre site utilise des cookies, acceptez-vous ?
              </span>
              <button onClick={() => {
                localStorage.setItem('isOk', 'true');
                setOk(true)
                notify()
              }}>Oui</button>
            </Modal>
          </>
        )
      }
      <ToastContainer
        position="bottom-center"
        theme="dark"
      />

    </StrictMode>
  )
}

export default App
