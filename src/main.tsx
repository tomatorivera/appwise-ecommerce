// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CarritoProvider } from './features/carrito/CarritoContext'
import { router } from './routes/routes'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <CarritoProvider>
    <RouterProvider router={router} />
  </CarritoProvider>
)
