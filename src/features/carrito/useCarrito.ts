import { useContext } from 'react'
import { CarritoContext } from './CarritoContext'

export function useCarrito() {
  const context = useContext(CarritoContext)

  if (!context)
    throw new Error('No hay un proveedor de carrito en este componente')

  return context
}
