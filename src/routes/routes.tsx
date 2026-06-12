import { createBrowserRouter } from 'react-router-dom'
import Catalogo from '../pages/Catalogo'
import DetalleProducto from '../pages/DetalleProducto'
import MainLayout from '../layouts/MainLayout'
import BusquedaProducto from '../pages/BusquedaProducto'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <Catalogo />,
        path: '/',
      },
      {
        element: <BusquedaProducto />,
        path: '/productos',
      },
      {
        element: <DetalleProducto />,
        path: '/productos/:id',
      },
    ],
  },
])
