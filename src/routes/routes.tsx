import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Catalogo from '../pages/Catalogo'

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
  },
  {
    element: <Catalogo />,
    path: '/catalogo',
  },
])
