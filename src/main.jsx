import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './containers/Login'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Login />
  <GlobalStyles/>
  <ToastContainer autoClose={3000} theme='dark' />
  </StrictMode>,
)
