import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Catalogo from '../pages/Catalogo'
import DetalleProducto from '../pages/DetalleProducto'
import MainLayout from '../layouts/MainLayout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <App />,
        path: '/',
      },
      {
        element: <Catalogo />,
        path: '/catalogo',
      },
      {
        element: <DetalleProducto />,
        path: '/producto/:id',
      },
    ],
  },
])
