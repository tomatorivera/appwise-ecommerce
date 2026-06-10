import { createContext, useCallback, useMemo, type ReactNode } from 'react'
import { CarritoContextValue } from '../../types/carrito.types'
import { Producto, ProductoEnCarrito } from '../../types/producto.types'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const CarritoContext = createContext<CarritoContextValue | undefined>(
  undefined
)

const STORAGE_KEY = 'cart:v1'

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<ProductoEnCarrito[]>(
    STORAGE_KEY,
    []
  )

  const agregarItem = useCallback(
    (producto: Producto) => {
      setItems((prev) => {
        const existente = prev.find((item) => item.id === producto.id)
        if (existente) {
          return prev.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        }
        return [...prev, { ...producto, cantidad: 1 }]
      })
    },
    [setItems]
  )

  const quitarItem = useCallback(
    (productId: number) => {
      setItems((prev) => prev.filter((item) => item.id !== productId))
    },
    [setItems]
  )

  const cambiarCantidad = useCallback(
    (productId: number, cantidad: number) => {
      if (cantidad <= 0) {
        setItems((prev) => prev.filter((item) => item.id !== productId))
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, cantidad } : item
        )
      )
    },
    [setItems]
  )

  const vaciarCarrito = useCallback(() => setItems([]), [setItems])

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad, 0),
    [items]
  )

  const totalPrecio = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.cantidad, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      agregarItem,
      quitarItem,
      cambiarCantidad,
      vaciarCarrito,
      totalItems,
      totalPrecio,
    }),
    [
      items,
      agregarItem,
      quitarItem,
      cambiarCantidad,
      vaciarCarrito,
      totalItems,
      totalPrecio,
    ]
  )

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  )
}
