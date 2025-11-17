import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/StripeConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise }>
      <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme='dark' />
    </AppProvider>
  </StrictMode>,
)
