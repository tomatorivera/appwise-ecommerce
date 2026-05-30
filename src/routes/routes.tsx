import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Catalogo from '../pages/Catalogo'
import DetalleProducto from '../pages/DetalleProducto'

export const router = createBrowserRouter([
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
])
