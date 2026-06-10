import { Producto, ProductoEnCarrito } from './producto.types'

export type CarritoContextValue = {
  items: ProductoEnCarrito[]
  agregarItem: (producto: Producto) => void
  quitarItem: (productoId: number) => void
  cambiarCantidad: (productoId: number, cantidad: number) => void
  vaciarCarrito: () => void
  totalItems: number
  totalPrecio: number
}
